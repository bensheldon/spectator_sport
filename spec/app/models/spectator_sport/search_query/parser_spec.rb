# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::SearchQuery::Parser do
  def parse(input)
    described_class.parse(input)
  end

  def label(key: nil, value: nil, wildcard: false)
    SpectatorSport::SearchQuery::SyntaxTree::Label.new(key: key, value: value, wildcard: wildcard)
  end

  def and_node(left, right)
    SpectatorSport::SearchQuery::SyntaxTree::And.new(left, right)
  end

  def or_node(left, right)
    SpectatorSport::SearchQuery::SyntaxTree::Or.new(left, right)
  end

  def not_node(node)
    SpectatorSport::SearchQuery::SyntaxTree::Not.new(node)
  end

  def date_filter(prefix:, operator: nil, date_string:)
    SpectatorSport::SearchQuery::SyntaxTree::DateFilter.new(prefix: prefix, operator: operator, date_string: date_string)
  end

  it "parses a single label term" do
    expect(parse("label:featured")).to eq(label(value: "featured"))
  end

  it "combines juxtaposed terms with implicit AND" do
    expect(parse("label:a label:b")).to eq(and_node(label(value: "a"), label(value: "b")))
  end

  it "combines terms inside {} with OR" do
    expect(parse("{label:a label:b}")).to eq(or_node(label(value: "a"), label(value: "b")))
  end

  it "combines same-key labels inside {} with OR" do
    expect(parse("{label:status:active label:status:pending}")).to eq(
      or_node(label(key: "status", value: "active"), label(key: "status", value: "pending"))
    )
  end

  it "parses a plain created: date filter" do
    expect(parse("created:2026-01-31")).to eq(date_filter(prefix: "created", date_string: "2026-01-31"))
  end

  it "parses created:/updated: date filters with a comparison operator" do
    expect(parse("updated:>=2026-01-31")).to eq(
      date_filter(prefix: "updated", operator: ">=", date_string: "2026-01-31")
    )
  end

  it "negates a date filter with a leading -" do
    expect(parse("-created:>2026-01-31")).to eq(
      not_node(date_filter(prefix: "created", operator: ">", date_string: "2026-01-31"))
    )
  end

  it "raises on an invalid date" do
    expect { parse("created:not-a-date") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /invalid date/i)
  end

  it "negates a single term with a leading -" do
    expect(parse("-label:a")).to eq(not_node(label(value: "a")))
  end

  it "negates a parenthesized group with a leading -" do
    expect(parse("-(label:a label:b)")).to eq(not_node(and_node(label(value: "a"), label(value: "b"))))
  end

  it "lets () explicitly group an implicit AND inside a larger sequence" do
    expect(parse("(label:a label:b) label:c")).to eq(
      and_node(and_node(label(value: "a"), label(value: "b")), label(value: "c"))
    )
  end

  it "parses the full example from the feature request" do
    node = parse(
      "(label:priority:high {label:status:active label:status:pending}) label:owner:* " \
      "-label:billing:paid -(label:team:marketing label:project:beta)"
    )

    priority_and_status = and_node(
      label(key: "priority", value: "high"),
      or_node(label(key: "status", value: "active"), label(key: "status", value: "pending"))
    )
    owner_wildcard = label(key: "owner", wildcard: true)
    not_billing = not_node(label(key: "billing", value: "paid"))
    not_team_and_project = not_node(and_node(
      label(key: "team", value: "marketing"),
      label(key: "project", value: "beta")
    ))

    expect(node).to eq(
      and_node(and_node(and_node(priority_and_status, owner_wildcard), not_billing), not_team_and_project)
    )
  end

  it "raises on a blank query" do
    expect { parse("") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /blank/i)
  end

  it "raises on unbalanced opening parenthesis" do
    expect { parse("(label:a") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /closing "\)"/i)
  end

  it "raises on unbalanced opening brace" do
    expect { parse("{label:a") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /closing "\}"/i)
  end

  it "raises on unbalanced closing parenthesis" do
    expect { parse("label:a)") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /trailing input/i)
  end

  it "raises on mismatched bracket types" do
    expect { parse("(label:a}") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /closing "\)"/i)
  end

  it "raises on an empty group" do
    expect { parse("()") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError)
  end

  it "raises on a stray colon with no term before it" do
    expect { parse(":") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError)
  end

  it "treats a dangling - with no valid target as a no-op rather than an error" do
    expect(parse("label:a -")).to eq(label(value: "a"))
    expect(parse("- label:a")).to eq(label(value: "a"))
  end

  describe "explicit AND / OR keywords" do
    it "parses AND the same as implicit juxtaposition" do
      expect(parse("label:a AND label:b")).to eq(and_node(label(value: "a"), label(value: "b")))
    end

    it "parses OR" do
      expect(parse("label:a OR label:b")).to eq(or_node(label(value: "a"), label(value: "b")))
    end

    it "gives AND higher precedence than OR when both are explicit" do
      # "a OR b AND c" == "a OR (b AND c)"
      expect(parse("label:a OR label:b AND label:c")).to eq(
        or_node(label(value: "a"), and_node(label(value: "b"), label(value: "c")))
      )
    end

    it "gives AND higher precedence than OR when AND is implicit (juxtaposed)" do
      # "a OR b c" == "a OR (b AND c)", same as explicit AND
      expect(parse("label:a OR label:b label:c")).to eq(
        or_node(label(value: "a"), and_node(label(value: "b"), label(value: "c")))
      )
    end

    it "lets parentheses override precedence" do
      expect(parse("(label:a OR label:b) AND label:c")).to eq(
        and_node(or_node(label(value: "a"), label(value: "b")), label(value: "c"))
      )
    end

    it "combines explicit AND with an explicit OR group inside {}" do
      expect(parse("label:a AND {label:b label:c}")).to eq(
        and_node(label(value: "a"), or_node(label(value: "b"), label(value: "c")))
      )
    end

    it "lets an explicit AND inside {} bind tighter than the brace's own OR default" do
      # "{a AND b c}" == "{(a AND b) OR c}" - AND still binds tighter than the
      # brace's OR default for the remaining bare juxtaposition
      expect(parse("{label:a AND label:b label:c}")).to eq(
        or_node(and_node(label(value: "a"), label(value: "b")), label(value: "c"))
      )
    end

    it "is case-insensitive" do
      expect(parse("label:a and label:b or label:c")).to eq(
        or_node(and_node(label(value: "a"), label(value: "b")), label(value: "c"))
      )
    end
  end
end
