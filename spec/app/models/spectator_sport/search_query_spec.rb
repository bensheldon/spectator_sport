# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::SearchQuery do
  # The test database isn't reset between examples, so every value used here
  # is namespaced to this spec to avoid colliding with labels created elsewhere.
  def create_recording(secure_id, labels: [], created_at: Time.current, updated_at: Time.current)
    recording = SpectatorSport::Recording.create!(
      secure_id: "search-query-spec-#{secure_id}", created_at: created_at, updated_at: updated_at
    )
    labels.each do |key, value|
      SpectatorSport::Label.create!(recording: recording, key: key, value: value, multiple: true)
    end
    recording
  end

  def to_scope(query, base_scope: SpectatorSport::Recording.all)
    described_class.new(query: query).to_scope(base_scope: base_scope)
  end

  describe "#to_scope" do
    it "returns the base scope unchanged when the query is blank" do
      recording = create_recording("blank-query")

      scope = to_scope(nil, base_scope: SpectatorSport::Recording.where(id: recording.id))

      expect(scope).to contain_exactly(recording)
    end

    it "matches a keyless label by value" do
      matching = create_recording("tag-matching", labels: [ [ nil, "search-query-spec-featured" ] ])
      other = create_recording("tag-other", labels: [ [ nil, "search-query-spec-not-featured" ] ])

      scope = to_scope("label:search-query-spec-featured")

      expect(scope).to include(matching)
      expect(scope).not_to include(other)
    end

    it "matches a key:value label" do
      matching = create_recording("kv-matching", labels: [ [ "search-query-spec-env", "prod" ] ])
      other = create_recording("kv-other", labels: [ [ "search-query-spec-env", "staging" ] ])

      scope = to_scope("label:search-query-spec-env:prod")

      expect(scope).to include(matching)
      expect(scope).not_to include(other)
    end

    it "matches a key:* wildcard regardless of value" do
      matching_one = create_recording("wild-one", labels: [ [ "search-query-spec-wild", "a" ] ])
      matching_two = create_recording("wild-two", labels: [ [ "search-query-spec-wild", "b" ] ])
      other = create_recording("wild-other", labels: [ [ "search-query-spec-not-wild", "a" ] ])

      scope = to_scope("label:search-query-spec-wild:*")

      expect(scope).to include(matching_one, matching_two)
      expect(scope).not_to include(other)
    end

    it "matches a partial value wildcard as a prefix" do
      matching = create_recording("prefix-wild-matching", labels: [ [ "search-query-spec-user_id", "2001" ] ])
      other = create_recording("prefix-wild-other", labels: [ [ "search-query-spec-user_id", "3001" ] ])

      scope = to_scope("label:search-query-spec-user_id:2*")

      expect(scope).to include(matching)
      expect(scope).not_to include(other)
    end

    it "matches a partial value wildcard as a suffix or in the middle" do
      suffix_matching = create_recording("suffix-wild-matching", labels: [ [ "search-query-spec-status", "in-review" ] ])
      middle_matching = create_recording("middle-wild-matching", labels: [ [ "search-query-spec-status", "in-progress-review" ] ])
      other = create_recording("suffix-wild-other", labels: [ [ "search-query-spec-status", "reviewed" ] ])

      scope = to_scope("label:search-query-spec-status:*review")

      expect(scope).to include(suffix_matching, middle_matching)
      expect(scope).not_to include(other)
    end

    it "treats a literal % typed in the query as a literal character, not a SQL LIKE wildcard" do
      matching = create_recording("escape-wild-matching", labels: [ [ "search-query-spec-percent", "50%off" ] ])
      other = create_recording("escape-wild-other", labels: [ [ "search-query-spec-percent", "50Xoff" ] ])

      # Without escaping, the query's literal "%" would behave like our "*" and match "50Xoff" too.
      scope = to_scope("label:search-query-spec-percent:50%*")

      expect(scope).to include(matching)
      expect(scope).not_to include(other)
    end

    it "combines juxtaposed terms with implicit AND, requiring both on the same recording" do
      matching = create_recording("and-matching", labels: [ [ "search-query-spec-env", "prod" ], [ nil, "search-query-spec-featured" ] ])
      only_env = create_recording("and-only-env", labels: [ [ "search-query-spec-env", "prod" ] ])
      only_tag = create_recording("and-only-tag", labels: [ [ nil, "search-query-spec-featured" ] ])

      scope = to_scope("label:search-query-spec-env:prod label:search-query-spec-featured")

      expect(scope).to include(matching)
      expect(scope).not_to include(only_env, only_tag)
    end

    it "combines terms inside {} with OR" do
      matching_one = create_recording("or-one", labels: [ [ "search-query-spec-env", "prod" ] ])
      matching_two = create_recording("or-two", labels: [ [ nil, "search-query-spec-featured" ] ])
      other = create_recording("or-other", labels: [ [ "search-query-spec-env", "staging" ] ])

      scope = to_scope("{label:search-query-spec-env:prod label:search-query-spec-featured}")

      expect(scope).to include(matching_one, matching_two)
      expect(scope).not_to include(other)
    end

    it "combines terms with the explicit AND keyword, same as juxtaposition" do
      matching = create_recording("kw-and-matching", labels: [ [ "search-query-spec-env", "prod" ], [ nil, "search-query-spec-featured" ] ])
      only_env = create_recording("kw-and-only-env", labels: [ [ "search-query-spec-env", "prod" ] ])

      scope = to_scope("label:search-query-spec-env:prod AND label:search-query-spec-featured")

      expect(scope).to include(matching)
      expect(scope).not_to include(only_env)
    end

    it "combines terms with the explicit OR keyword" do
      matching_one = create_recording("kw-or-one", labels: [ [ "search-query-spec-env", "prod" ] ])
      matching_two = create_recording("kw-or-two", labels: [ [ nil, "search-query-spec-featured" ] ])
      other = create_recording("kw-or-other", labels: [ [ "search-query-spec-env", "staging" ] ])

      scope = to_scope("label:search-query-spec-env:prod OR label:search-query-spec-featured")

      expect(scope).to include(matching_one, matching_two)
      expect(scope).not_to include(other)
    end

    it "gives AND higher precedence than OR, matching the parser's grammar" do
      via_a = create_recording("prec-via-a", labels: [ [ nil, "search-query-spec-prec-a" ] ])
      via_b_and_c = create_recording(
        "prec-via-b-and-c",
        labels: [ [ nil, "search-query-spec-prec-b" ], [ nil, "search-query-spec-prec-c" ] ]
      )
      only_b = create_recording("prec-only-b", labels: [ [ nil, "search-query-spec-prec-b" ] ])

      # "a OR b AND c" == "a OR (b AND c)"
      scope = to_scope(
        "label:search-query-spec-prec-a OR label:search-query-spec-prec-b label:search-query-spec-prec-c"
      )

      expect(scope).to include(via_a, via_b_and_c)
      expect(scope).not_to include(only_b)
    end

    it "ORs same-key labels grouped inside {}" do
      matching_one = create_recording("brace-one", labels: [ [ "search-query-spec-status", "active" ] ])
      matching_two = create_recording("brace-two", labels: [ [ "search-query-spec-status", "pending" ] ])
      other = create_recording("brace-other", labels: [ [ "search-query-spec-status", "archived" ] ])

      scope = to_scope(
        "{label:search-query-spec-status:active label:search-query-spec-status:pending}"
      )

      expect(scope).to include(matching_one, matching_two)
      expect(scope).not_to include(other)
    end

    it "matches an exact created: day" do
      matching = create_recording("created-day-matching", created_at: Time.utc(2026, 1, 31, 12, 0, 0))
      before = create_recording("created-day-before", created_at: Time.utc(2026, 1, 30, 23, 59, 59))
      after = create_recording("created-day-after", created_at: Time.utc(2026, 2, 1, 0, 0, 1))
      base_scope = SpectatorSport::Recording.where(id: [ matching.id, before.id, after.id ])

      scope = to_scope("created:2026-01-31", base_scope: base_scope)

      expect(scope).to contain_exactly(matching)
    end

    it "matches created:>= and created:< as inclusive/exclusive day boundaries" do
      on_day = create_recording("created-cmp-on", created_at: Time.utc(2026, 1, 31, 0, 0, 0))
      before_day = create_recording("created-cmp-before", created_at: Time.utc(2026, 1, 30, 23, 59, 59))
      base_scope = SpectatorSport::Recording.where(id: [ on_day.id, before_day.id ])

      expect(to_scope("created:>=2026-01-31", base_scope: base_scope)).to contain_exactly(on_day)
      expect(to_scope("created:<2026-01-31", base_scope: base_scope)).to contain_exactly(before_day)
    end

    it "matches updated: the same way as created:" do
      matching = create_recording("updated-day-matching", updated_at: Time.utc(2026, 1, 31, 12, 0, 0))
      other = create_recording("updated-day-other", updated_at: Time.utc(2026, 2, 1, 0, 0, 1))
      base_scope = SpectatorSport::Recording.where(id: [ matching.id, other.id ])

      scope = to_scope("updated:2026-01-31", base_scope: base_scope)

      expect(scope).to contain_exactly(matching)
    end

    it "combines a label term with a created: filter via implicit AND" do
      matching = create_recording(
        "combo-matching", labels: [ [ "search-query-spec-env", "prod" ] ], created_at: Time.utc(2026, 1, 31, 12, 0, 0)
      )
      wrong_day = create_recording(
        "combo-wrong-day", labels: [ [ "search-query-spec-env", "prod" ] ], created_at: Time.utc(2026, 2, 1, 0, 0, 1)
      )
      base_scope = SpectatorSport::Recording.where(id: [ matching.id, wrong_day.id ])

      scope = to_scope("label:search-query-spec-env:prod created:2026-01-31", base_scope: base_scope)

      expect(scope).to contain_exactly(matching)
    end

    it "excludes recordings matching a negated -created: filter" do
      matching = create_recording("negate-created-matching", created_at: Time.utc(2026, 2, 1, 0, 0, 1))
      excluded = create_recording("negate-created-excluded", created_at: Time.utc(2026, 1, 31, 12, 0, 0))
      base_scope = SpectatorSport::Recording.where(id: [ matching.id, excluded.id ])

      scope = to_scope("-created:2026-01-31", base_scope: base_scope)

      expect(scope).to contain_exactly(matching)
    end

    it "excludes recordings matching a -label term" do
      matching = create_recording("negate-matching", labels: [ [ "search-query-spec-env", "prod" ] ])
      excluded = create_recording("negate-excluded", labels: [ [ "search-query-spec-billing", "paid" ] ])

      scope = to_scope("-label:search-query-spec-billing:paid")

      expect(scope).to include(matching)
      expect(scope).not_to include(excluded)
    end

    it "excludes recordings matching a negated -(...) group" do
      matching = create_recording("negate-group-matching", labels: [ [ "search-query-spec-team", "marketing" ] ])
      excluded = create_recording(
        "negate-group-excluded",
        labels: [ [ "search-query-spec-team", "marketing" ], [ "search-query-spec-project", "beta" ] ]
      )

      scope = to_scope(
        "-(label:search-query-spec-team:marketing label:search-query-spec-project:beta)"
      )

      expect(scope).to include(matching)
      expect(scope).not_to include(excluded)
    end

    it "supports the full example from the feature request" do
      fully_matching = create_recording(
        "full-matching",
        labels: [
          [ "search-query-spec-priority", "high" ],
          [ "search-query-spec-status", "active" ],
          [ "search-query-spec-owner", "alice" ]
        ]
      )
      excluded_by_billing = create_recording(
        "full-excluded-billing",
        labels: [
          [ "search-query-spec-priority", "high" ],
          [ "search-query-spec-status", "pending" ],
          [ "search-query-spec-owner", "bob" ],
          [ "search-query-spec-billing", "paid" ]
        ]
      )
      excluded_by_team_and_project = create_recording(
        "full-excluded-team",
        labels: [
          [ "search-query-spec-priority", "high" ],
          [ "search-query-spec-status", "active" ],
          [ "search-query-spec-owner", "carol" ],
          [ "search-query-spec-team", "marketing" ],
          [ "search-query-spec-project", "beta" ]
        ]
      )
      excluded_by_status = create_recording(
        "full-excluded-status",
        labels: [
          [ "search-query-spec-priority", "high" ],
          [ "search-query-spec-status", "archived" ],
          [ "search-query-spec-owner", "dave" ]
        ]
      )

      scope = to_scope(
        "(label:search-query-spec-priority:high " \
        "{label:search-query-spec-status:active label:search-query-spec-status:pending}) " \
        "label:search-query-spec-owner:* " \
        "-label:search-query-spec-billing:paid " \
        "-(label:search-query-spec-team:marketing label:search-query-spec-project:beta)"
      )

      expect(scope).to include(fully_matching)
      expect(scope).not_to include(excluded_by_billing, excluded_by_team_and_project, excluded_by_status)
    end

    it "composes with an existing base scope instead of discarding it" do
      matching = create_recording("compose-matching", labels: [ [ "search-query-spec-env", "prod" ] ])
      excluded_by_base = create_recording("compose-excluded", labels: [ [ "search-query-spec-env", "prod" ] ])

      base_scope = SpectatorSport::Recording.where(id: matching.id)
      scope = to_scope("label:search-query-spec-env:prod", base_scope: base_scope)

      expect(scope).to include(matching)
      expect(scope).not_to include(excluded_by_base)
    end

    it "returns an empty (none) scope for a malformed query, instead of raising" do
      scope = to_scope("label:a)")

      expect(scope).to be_empty
    end
  end

  describe "validations" do
    it "is valid when the query is blank" do
      expect(described_class.new(query: nil)).to be_valid
      expect(described_class.new(query: "")).to be_valid
    end

    it "is valid for a well-formed query" do
      expect(described_class.new(query: "label:env:prod")).to be_valid
    end

    it "is invalid for a malformed query, with a message on :query" do
      search_query = described_class.new(query: "label:a)")

      expect(search_query).not_to be_valid
      expect(search_query.errors[:query]).to be_present
    end

    it "surfaces the parser's syntax error message on :query" do
      search_query = described_class.new(query: "(label:a")
      search_query.valid?

      expect(search_query.errors[:query].join).to match(/closing "\)"/i)
    end

    it "identifies a typo'd prefix as an unknown keyword" do
      search_query = described_class.new(query: "labe:foo")
      search_query.valid?

      expect(search_query.errors[:query].join).to match(/unknown keyword "labe:"/i)
    end
  end

  describe ".label_term" do
    def label(key:, value:)
      SpectatorSport::Label.new(key: key, value: value)
    end

    it "builds a key:value term" do
      expect(described_class.label_term(label(key: "env", value: "prod"))).to eq("label:env:prod")
    end

    it "builds a keyless term" do
      expect(described_class.label_term(label(key: nil, value: "featured"))).to eq("label:featured")
    end

    it "quotes segments containing characters the lexer treats as delimiters" do
      expect(described_class.label_term(label(key: "note", value: "needs review"))).to eq('label:note:"needs review"')
    end
  end

  describe ".with_term" do
    it "returns just the term when the query is blank" do
      expect(described_class.with_term(nil, "label:env:prod")).to eq("label:env:prod")
      expect(described_class.with_term("  ", "label:env:prod")).to eq("label:env:prod")
    end

    it "appends the term with implicit-AND juxtaposition" do
      expect(described_class.with_term("created:2026-01-31", "label:env:prod")).to eq("created:2026-01-31 label:env:prod")
    end

    it "does not duplicate a term already present in the query" do
      expect(described_class.with_term("label:env:prod", "label:env:prod")).to eq("label:env:prod")
      expect(described_class.with_term("a label:env:prod b", "label:env:prod")).to eq("a label:env:prod b")
    end
  end
end
