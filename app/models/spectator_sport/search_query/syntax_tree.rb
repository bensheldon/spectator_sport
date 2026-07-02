require "date"

module SpectatorSport
  class SearchQuery
    # AST node classes built by the Parser and converted to ActiveRecord
    # scopes. Kept together in one file since they're small and only make
    # sense read as a set.
    module SyntaxTree
      # Leaf node: a single `label:...` term. A "*" anywhere inside the
      # value (other than standing alone as `label:key:*`, which already
      # means "any value") acts as a wildcard matching zero or more
      # characters, e.g. `label:user_id:2*` matches any value starting
      # with "2".
      class Label
        attr_reader :key, :value, :wildcard
        alias_method :wildcard?, :wildcard

        def initialize(key:, value:, wildcard: false)
          @key = key
          @value = value
          @wildcard = wildcard
        end

        def to_scope
          SpectatorSport::Recording.where(id: labels_scope.select(:id))
        end

        def ==(other)
          other.is_a?(self.class) && other.key == key && other.value == value && other.wildcard == wildcard
        end

        private

        def labels_scope
          base = SpectatorSport::Recording.joins(:labels).where(spectator_sport_labels: { key: key })
          return base if wildcard
          return base.where("spectator_sport_labels.value LIKE ? ESCAPE '!'", like_pattern(value)) if value.include?("*")

          base.where(spectator_sport_labels: { value: value })
        end

        # Escapes existing SQL LIKE metacharacters in the literal value before
        # turning the user's "*" into the real "%" wildcard, so a label value
        # that happens to contain "%" or "_" is matched literally. Uses "!" as
        # the escape character rather than "\\" because a backslash escape char
        # is a syntax error on MySQL (its string literals consume the backslash).
        def like_pattern(value)
          value.gsub(/[%_!]/) { |char| "!#{char}" }.tr("*", "%")
        end
      end

      # Branch node: both sides must match (possibly different labels on
      # the same recording).
      class And
        attr_reader :left, :right

        def initialize(left, right)
          @left = left
          @right = right
        end

        def to_scope
          left.to_scope.where(id: right.to_scope.select(:id))
        end

        def ==(other)
          other.is_a?(self.class) && other.left == left && other.right == right
        end
      end

      # Branch node: either side may match.
      class Or
        attr_reader :left, :right

        def initialize(left, right)
          @left = left
          @right = right
        end

        def to_scope
          left.to_scope.or(right.to_scope)
        end

        def ==(other)
          other.is_a?(self.class) && other.left == left && other.right == right
        end
      end

      # Node: recordings that do NOT match the wrapped node.
      class Not
        attr_reader :node

        def initialize(node)
          @node = node
        end

        def to_scope
          SpectatorSport::Recording.where.not(id: node.to_scope.select(:id))
        end

        def ==(other)
          other.is_a?(self.class) && other.node == node
        end
      end

      # Leaf node: a `created:` or `updated:` term, matching a day or a
      # side of it (created:>2026-01-01, created:>=2026-01-01, etc). With no
      # operator, matches recordings created/updated anywhere within that day.
      class DateFilter
        COLUMNS = { "created" => "created_at", "updated" => "updated_at" }.freeze
        OPERATORS = %w[>= <= > <].freeze

        attr_reader :column, :operator, :date

        def initialize(prefix:, operator:, date_string:)
          @column = COLUMNS.fetch(prefix.downcase) { raise SyntaxError, "Unknown date field \"#{prefix}:\"" }
          raise SyntaxError, "Unknown date operator #{operator.inspect}" if operator && !OPERATORS.include?(operator)

          @operator = operator
          @date = parse_date(date_string)
        end

        def to_scope
          case operator
          when ">"
            SpectatorSport::Recording.where("#{column} > ?", date.end_of_day)
          when ">="
            SpectatorSport::Recording.where("#{column} >= ?", date.beginning_of_day)
          when "<"
            SpectatorSport::Recording.where("#{column} < ?", date.beginning_of_day)
          when "<="
            SpectatorSport::Recording.where("#{column} <= ?", date.end_of_day)
          else
            SpectatorSport::Recording.where(column => date.all_day)
          end
        end

        def ==(other)
          other.is_a?(self.class) && other.column == column && other.operator == operator && other.date == date
        end

        private

        def parse_date(date_string)
          Date.parse(date_string)
        rescue ArgumentError, TypeError
          raise SyntaxError, "Invalid date #{date_string.inspect} - expected something like 2026-01-31"
        end
      end
    end
  end
end
