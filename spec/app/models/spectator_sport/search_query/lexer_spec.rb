# frozen_string_literal: true

require "rails_helper"

describe SpectatorSport::SearchQuery::Lexer do
  def tokenize(input)
    described_class.tokenize(input)
  end

  it "tokenizes a keyless label" do
    expect(tokenize("label:featured")).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: nil, value: "featured", wildcard: false }) ]
    )
  end

  it "tokenizes a key:value label" do
    expect(tokenize("label:env:prod")).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: "env", value: "prod", wildcard: false }) ]
    )
  end

  it "tokenizes a key:* wildcard label" do
    expect(tokenize("label:env:*")).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: "env", value: nil, wildcard: true }) ]
    )
  end

  it "tokenizes quoted segments containing spaces and parens" do
    expect(tokenize('label:"has (parens) and spaces"')).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: nil, value: "has (parens) and spaces", wildcard: false }) ]
    )
  end

  it "is case-insensitive for the label: prefix" do
    expect(tokenize("LABEL:featured")).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: nil, value: "featured", wildcard: false }) ]
    )
  end

  it "tokenizes parens, braces, and juxtaposed labels" do
    tokens = tokenize("(label:a label:b) {label:c label:d}")

    expect(tokens.map(&:type)).to eq(
      [ :lparen, :label, :label, :rparen, :lbrace, :label, :label, :rbrace ]
    )
  end

  it "tokenizes a leading - as negation when directly touching label:, (, or {" do
    tokens = tokenize("-label:a -(label:b) -{label:c}")

    expect(tokens.map(&:type)).to eq(
      [ :not, :label, :not, :lparen, :label, :rparen, :not, :lbrace, :label, :rbrace ]
    )
  end

  it "silently drops a - that isn't directly touching a valid target, instead of raising" do
    expect(tokenize("- label:a")).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: nil, value: "a", wildcard: false }) ]
    )
  end

  it "silently drops a trailing dangling -" do
    expect(tokenize("label:a -")).to eq(
      [ SpectatorSport::SearchQuery::Lexer::Token.new(:label, { key: nil, value: "a", wildcard: false }) ]
    )
  end

  it "raises on unterminated quotes" do
    expect { tokenize('label:"unterminated') }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /unterminated/i)
  end

  it "raises on a bare { immediately after a label key, since value lists aren't supported" do
    expect { tokenize("label:status:{active pending}") }.to raise_error(
      SpectatorSport::SearchQuery::SyntaxError, /expected label value/i
    )
  end

  it "raises on input that isn't a label, paren, brace, keyword, or negation" do
    expect { tokenize("*") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /unexpected input/i)
  end

  describe "unknown keyword detection" do
    it "identifies a word immediately followed by : as an unknown keyword" do
      expect { tokenize("labe:foo") }.to raise_error(
        SpectatorSport::SearchQuery::SyntaxError, /unknown keyword "labe:"/i
      )
    end

    it "suggests the recognized prefixes" do
      expect { tokenize("foo:bar") }.to raise_error(
        SpectatorSport::SearchQuery::SyntaxError, /did you mean "label:", "created:", or "updated:"/i
      )
    end

    it "does not misfire on the recognized prefixes themselves" do
      expect { tokenize("label:foo") }.not_to raise_error
      expect { tokenize("created:2026-01-31") }.not_to raise_error
      expect { tokenize("updated:2026-01-31") }.not_to raise_error
    end
  end

  it "raises when label: isn't followed by a value" do
    expect { tokenize("label:") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /expected label value/i)
  end

  it "returns an empty array for a blank string" do
    expect(tokenize("   ")).to eq([])
  end

  describe "AND / OR keywords" do
    it "tokenizes AND between two labels" do
      expect(tokenize("label:a AND label:b").map(&:type)).to eq([ :label, :and, :label ])
    end

    it "tokenizes OR between two labels" do
      expect(tokenize("label:a OR label:b").map(&:type)).to eq([ :label, :or, :label ])
    end

    it "is case-insensitive for both keywords" do
      expect(tokenize("label:a and label:b or label:c").map(&:type)).to eq(
        [ :label, :and, :label, :or, :label ]
      )
    end

    it "only matches AND/OR as whole words, not as a prefix of a longer bareword" do
      expect { tokenize("android") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /unexpected input/i)
      expect { tokenize("order") }.to raise_error(SpectatorSport::SearchQuery::SyntaxError, /unexpected input/i)
    end
  end

  describe "created: / updated: date filters" do
    it "tokenizes a plain date (no operator)" do
      expect(tokenize("created:2026-01-31")).to eq(
        [ SpectatorSport::SearchQuery::Lexer::Token.new(:date_filter, { prefix: "created", operator: nil, date_string: "2026-01-31" }) ]
      )
    end

    it "tokenizes each comparison operator" do
      %w[> >= < <=].each do |operator|
        expect(tokenize("updated:#{operator}2026-01-31")).to eq(
          [ SpectatorSport::SearchQuery::Lexer::Token.new(:date_filter, { prefix: "updated", operator: operator, date_string: "2026-01-31" }) ]
        )
      end
    end

    it "is case-insensitive for the created:/updated: prefix" do
      expect(tokenize("CREATED:2026-01-31").first.value[:prefix]).to eq("created")
    end

    it "negates with a leading - when directly touching created: or updated:" do
      tokens = tokenize("-created:2026-01-31 -updated:>=2026-01-31")

      expect(tokens.map(&:type)).to eq([ :not, :date_filter, :not, :date_filter ])
    end
  end
end
