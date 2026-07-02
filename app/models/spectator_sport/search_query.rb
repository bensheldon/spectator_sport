module SpectatorSport
  # Parses a small Gmail-search-style query language for filtering recordings
  # by label and by created/updated date, and converts the result into an
  # ActiveRecord scope.
  #
  #   label:value               matches a keyless label with this value
  #   label:key:value           matches a label with this key and value
  #   label:key:*               matches any label with this key, any value
  #   label:key:2*              matches any label with this key whose value starts with "2"
  #                             ("*" matches zero or more characters anywhere in the value)
  #   -label:key:value          matches recordings WITHOUT this label
  #   created:2026-01-31        matches recordings created on that day
  #   created:>=2026-01-31      matches recordings created on or after that day
  #                             (also <, >, <=; same set of operators for updated:)
  #
  # Terms juxtaposed with whitespace combine with implicit AND, same as the
  # explicit "AND" keyword; the explicit "OR" keyword and "{...}" groups both
  # combine terms with OR instead (e.g. label:a OR label:b, or equivalently
  # {label:key:v1 label:key:v2}); "(...)" groups terms with AND (mainly useful
  # with a leading "-" to negate a whole group). AND binds tighter than OR,
  # whether AND is implicit or explicit. For example:
  #
  #   (label:priority:high {label:status:active label:status:pending}) label:owner:*
  #     -label:billing:paid -(label:team:marketing label:project:beta)
  #
  # Usage:
  #
  #   search_query = SpectatorSport::SearchQuery.new(query: params[:query])
  #   if search_query.valid?
  #     recordings = search_query.to_scope(base_scope: recordings)
  #   else
  #     search_query.errors[:query] # => ["Missing closing \")\""]
  #   end
  class SearchQuery
    class SyntaxError < StandardError; end

    include ActiveModel::Model

    attr_accessor :query

    validate :query_must_parse

    # Builds the DSL term that matches a label, e.g. "label:env:prod" or
    # "label:featured" for a keyless label. Segments containing characters the
    # lexer treats as delimiters are wrapped in double quotes.
    def self.label_term(label)
      if label.key.present?
        "label:#{quote_segment(label.key)}:#{quote_segment(label.value)}"
      else
        "label:#{quote_segment(label.value)}"
      end
    end

    # Builds the DSL term that matches any label with the given key, e.g.
    # "label:env:*".
    def self.label_key_term(key)
      "label:#{quote_segment(key)}:*"
    end

    # Returns `query` with `term` appended via the implicit-AND juxtaposition
    # the parser uses, unless the exact term is already present.
    def self.with_term(query, term)
      query = query.to_s.strip
      return term if query.empty?
      return query if query.split.include?(term)

      "#{query} #{term}"
    end

    def self.quote_segment(value)
      value = value.to_s
      value.empty? || value.match?(/[\s(){}:"]/) ? %("#{value}") : value
    end
    private_class_method :quote_segment

    def to_scope(base_scope: SpectatorSport::Recording.all)
      return base_scope if query.blank?
      return base_scope.none unless valid?

      base_scope.where(id: parsed_query.to_scope.select(:id))
    end

    private

    def parsed_query
      @parsed_query ||= Parser.parse(query)
    end

    def query_must_parse
      return if query.blank?

      parsed_query
    rescue SyntaxError => e
      errors.add(:query, e.message)
    end
  end
end
