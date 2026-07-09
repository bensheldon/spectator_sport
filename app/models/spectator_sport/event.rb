module SpectatorSport
  class Event < ApplicationRecord
    PAGE_LIMIT = 1_000

    belongs_to :session, optional: true
    belongs_to :session_window, optional: true
    belongs_to :recording, optional: true

    scope :page_after, ->(event) { (event ? where("(created_at, id) > (?, ?)", event.created_at, event.id) : self).order(created_at: :asc, id: :asc).limit(PAGE_LIMIT) }

    Explanation = Struct.new(:title, :details)

    # taken from https://github.com/rrweb-io/rrweb/blob/9488deb6d54a5f04350c063d942da5e96ab74075/src/types.ts
    # Keyed by string digits (not indexed by integer) since the raw ordinal may arrive, or be
    # read back out of the event_data json column, as either an Integer or a String.
    EVENT_TYPES = {
      "0" => "DomContentLoaded",
      "1" => "Load",
      "2" => "FullSnapshot",
      "3" => "IncrementalSnapshot",
      "4" => "Meta",
      "5" => "Custom",
      "6" => "Plugin",
      "7" => "Asset"
    }

    EVENT_SOURCES = {
      "0" => "Mutation",
      "1" => "MouseMove",
      "2" => "MouseInteraction",
      "3" => "Scroll",
      "4" => "ViewportResize",
      "5" => "Input",
      "6" => "TouchMove",
      "7" => "MediaInteraction",
      "8" => "StyleSheetRule",
      "9" => "CanvasMutation",
      "10" => "Font",
      "11" => "Log",
      "12" => "Drag",
      "13" => "StyleDeclaration",
      "14" => "Selection",
      "15" => "AdoptedStyleSheet",
      "16" => "CustomElement"
    }

    MOUSE_INTERACTIONS = {
      "0" => "MouseUp",
      "1" => "MouseDown",
      "2" => "Click",
      "3" => "ContextMenu",
      "4" => "DblClick",
      "5" => "Focus",
      "6" => "Blur",
      "7" => "TouchStart",
      "8" => "TouchMove_Departed",
      "9" => "TouchEnd",
      "10" => "TouchCancel"
    }

    def explanation
      explanation = Explanation.new(title, [])

      if event_type == "Meta"
        explanation.details << "visited #{event_data.dig("data", "href")}"
      end

      if event_source
        explanation.details << "source: #{event_source}"
      end

      if event_source == "MouseInteraction"
        mouse_interaction = MOUSE_INTERACTIONS[event_data.dig("data", "type").to_s]
        explanation.details << "#{mouse_interaction}"
      end

      explanation
    end

    def title
      if event_type == "IncrementalSnapshot" && event_source == "MouseInteraction" &&
          MOUSE_INTERACTIONS[event_data.dig("data", "type").to_s] == "Click"
        "Mouse Click"
      else
        event_type
      end
    end

    def page
      event_data.dig("data", "href")
    end

    def label? = event_data.dig("data", "tag") == CustomEvents::LABEL
    def label_key = event_data.dig("data", "payload", "key")
    def label_value = event_data.dig("data", "payload", "value")

    def history? = event_data.dig("data", "tag") == CustomEvents::HISTORY
    def history_href = event_data.dig("data", "payload", "href")

    def lifecycle? = event_data.dig("data", "tag") == CustomEvents::LIFECYCLE
    def lifecycle_reason = event_data.dig("data", "payload", "reason")
  end
end
