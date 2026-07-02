require "strscan"

module SpectatorSport
  class SearchQuery
    # Turns a query string into a flat array of Tokens. Knows nothing about
    # grammar/precedence - that's the Parser's job.
    #
    # Terms combine by simple juxtaposition (implicit AND, like Gmail search),
    # or with the explicit AND / OR keywords:
    #   label:a label:b            => a AND b
    #   label:a AND label:b        => a AND b (same as juxtaposition, just explicit)
    #   label:a OR label:b         => a OR b
    #   {label:a label:b}          => a OR b
    #   {label:key:v1 label:key:v2} => (key:v1 OR key:v2)
    #   -label:a                   => NOT a
    #   -(label:a label:b)         => NOT (a AND b)
    #   created:2026-01-31         => created on that day
    #   created:>=2026-01-31       => created on or after that day (also <, >, <=; same for updated:)
    #
    # A leading "-" only negates when directly (no space) followed by "(", "{",
    # "label:", "created:", or "updated:", matching Gmail's minus-operator
    # convention. A "-" with no valid target directly after it is a no-op and
    # is silently dropped, rather than raising a syntax error.
    #
    # A word immediately followed by ":" that isn't one of the recognized
    # prefixes (e.g. a typo like "labe:foo") raises a specific "unknown
    # keyword" error instead of a generic "unexpected input" one.
    class Lexer
      # type is one of :lparen, :rparen, :and, :or, :label
      # value is only set for :label tokens, a hash of { key:, value:, wildcard: }
      Token = Struct.new(:type, :value)

      LABEL_PREFIX = /label:/i
      DATE_PREFIX = /(created|updated):/i
      DATE_OPERATOR = />=|<=|>|</
      NOT_PREFIX = /-(?=[({]|label:|created:|updated:)/i
      AND_KEYWORD = /AND\b/i
      OR_KEYWORD = /OR\b/i
      KEYWORD_LOOKALIKE = /([A-Za-z_][A-Za-z0-9_]*):/
      DANGLING_NOT = /-/
      BAREWORD = /[^\s(){}:]+/

      def self.tokenize(input)
        new(input).tokenize
      end

      def initialize(input)
        @scanner = StringScanner.new(input.to_s)
      end

      def tokenize
        tokens = []
        loop do
          @scanner.skip(/\s+/)
          break if @scanner.eos?

          token = next_token
          tokens << token if token
        end
        tokens
      end

      private

      def next_token
        if @scanner.scan(/\(/)
          Token.new(:lparen)
        elsif @scanner.scan(/\)/)
          Token.new(:rparen)
        elsif @scanner.scan(/\{/)
          Token.new(:lbrace)
        elsif @scanner.scan(/\}/)
          Token.new(:rbrace)
        elsif @scanner.scan(NOT_PREFIX)
          Token.new(:not)
        elsif @scanner.scan(LABEL_PREFIX)
          scan_label
        elsif @scanner.scan(DATE_PREFIX)
          scan_date_filter(@scanner[1].downcase)
        elsif @scanner.scan(AND_KEYWORD)
          Token.new(:and)
        elsif @scanner.scan(OR_KEYWORD)
          Token.new(:or)
        elsif @scanner.scan(KEYWORD_LOOKALIKE)
          raise SyntaxError,
            "Unknown keyword \"#{@scanner[1]}:\" - did you mean \"label:\", \"created:\", or \"updated:\"?"
        elsif @scanner.scan(DANGLING_NOT)
          nil
        else
          raise SyntaxError, "Unexpected input at position #{@scanner.pos}: #{@scanner.rest.inspect}"
        end
      end

      def scan_date_filter(prefix)
        operator = @scanner.scan(DATE_OPERATOR)
        date_string = scan_segment("#{prefix}: date")
        Token.new(:date_filter, { prefix: prefix, operator: operator, date_string: date_string })
      end

      def scan_label
        first = scan_segment("label value")

        return Token.new(:label, { key: nil, value: first, wildcard: false }) unless @scanner.scan(/:/)

        second = scan_segment("label value")
        if second == "*"
          Token.new(:label, { key: first, value: nil, wildcard: true })
        else
          Token.new(:label, { key: first, value: second, wildcard: false })
        end
      end

      def scan_segment(description)
        if @scanner.scan(/"/)
          value = @scanner.scan_until(/"/)
          raise SyntaxError, "Unterminated quoted #{description}" if value.nil?

          value.chomp('"')
        else
          value = @scanner.scan(BAREWORD)
          raise SyntaxError, "Expected #{description}" if value.nil?

          value
        end
      end
    end
  end
end
