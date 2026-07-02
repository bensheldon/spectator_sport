module SpectatorSport
  class SearchQuery
    # Recursive-descent parser. AND binds tighter than OR, whether AND is
    # written explicitly or implied by juxtaposition:
    #
    #   query      := or_expr(:and)
    #   or_expr(d) := and_expr(d) ( "OR" and_expr(d) )*
    #   and_expr(d) := factor ( "AND" factor | factor )*   # a bare (no keyword)
    #                                                       # factor combines via `d`
    #   factor     := "-"* primary                         # each "-" toggles negation
    #   primary    := "(" or_expr(:and) ")"                 # AND-group
    #               | "{" or_expr(:or) "}"                  # OR-group
    #               | LABEL
    #               | DATE_FILTER                           # created:2026-01-31, updated:>=2026-01-31, etc
    #
    # `d` (the default) only matters for juxtaposition with no keyword: at the
    # top level and inside "(...)" it's AND, inside "{...}" it's OR. Explicit
    # "AND"/"OR" keywords always mean what they say regardless of `d`.
    class Parser
      def self.parse(input)
        new(Lexer.tokenize(input)).parse
      end

      def initialize(tokens)
        @tokens = tokens
        @position = 0
      end

      def parse
        raise SyntaxError, "Query is blank" if @tokens.empty?

        node = parse_or(:and)
        raise SyntaxError, "Unexpected trailing input after #{describe(peek(-1))}" unless at_end?

        node
      end

      private

      TERM_STARTERS = [ :lparen, :lbrace, :label, :date_filter, :not ].freeze

      def parse_or(default)
        node = parse_and(default)
        while match?(:or)
          advance
          node = SyntaxTree::Or.new(node, parse_and(default))
        end
        node
      end

      def parse_and(default)
        node = parse_factor
        loop do
          if match?(:and)
            advance
            node = SyntaxTree::And.new(node, parse_factor)
          elsif term_start?
            klass = default == :or ? SyntaxTree::Or : SyntaxTree::And
            node = klass.new(node, parse_factor)
          else
            break
          end
        end
        node
      end

      def parse_factor
        negations = 0
        while match?(:not)
          advance
          negations += 1
        end

        node = parse_primary
        negations.odd? ? SyntaxTree::Not.new(node) : node
      end

      def parse_primary
        if match?(:lparen)
          advance
          node = parse_or(:and)
          expect(:rparen, "Missing closing \")\"")
          node
        elsif match?(:lbrace)
          advance
          node = parse_or(:or)
          expect(:rbrace, "Missing closing \"}\"")
          node
        elsif match?(:label)
          SyntaxTree::Label.new(**advance.value)
        elsif match?(:date_filter)
          SyntaxTree::DateFilter.new(**advance.value)
        else
          raise SyntaxError, "Expected \"label:...\", \"(\", or \"{\" but found #{describe(peek)}"
        end
      end

      def term_start?
        !at_end? && TERM_STARTERS.include?(peek.type)
      end

      def match?(type)
        !at_end? && peek.type == type
      end

      def expect(type, message)
        raise SyntaxError, message unless match?(type)

        advance
      end

      def advance
        token = @tokens[@position]
        @position += 1
        token
      end

      def peek(offset = 0)
        @tokens[@position + offset]
      end

      def at_end?
        @position >= @tokens.length
      end

      def describe(token)
        token ? token.type.to_s : "end of input"
      end
    end
  end
end
