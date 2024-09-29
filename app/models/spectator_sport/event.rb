module SpectatorSport
  class Event < ApplicationRecord
    belongs_to :session
    belongs_to :session_window

    Explanation = Struct.new(:title, :details)

    # taken from https://github.com/rrweb-io/rrweb/blob/9488deb6d54a5f04350c063d942da5e96ab74075/src/types.ts
    EVENT_TYPES = %w[DomContentLoaded Load FullSnapshot IncrementalSnapshot Meta Custom]

    EVENT_SOURCES = %w[Mutation MouseMove MouseInteraction Scroll ViewportResize Input TouchMove MediaInteraction
                       StyleSheetRule CanvasMutation Font Log Drag StyleDeclaration Selection AdoptedStyleSheet]

    MOUSE_INTERACTIONS = %w[MouseUp MouseDown Click ContextMenu DblClick Focus Blur TouchStart TouchMove_Departed
                            TouchEnd TouchCancel]

    def explanation
      explanation = Explanation.new(title, [])

      if event_type == "Meta"
        explanation.details << "visited #{event_data.dig("data", "href")}"
      end

      if event_source
        explanation.details << "source: #{event_source}"
      end

      if event_source == "MouseInteraction"
        mouse_interaction = MOUSE_INTERACTIONS[event_data.dig("data", "type")]
        explanation.details << "#{mouse_interaction}"
      end

      explanation
    end

    def event_type
      EVENT_TYPES[event_data["type"]]
    end

    def event_source
      return unless event_data.dig("data", "source")

      EVENT_SOURCES[event_data.dig("data", "source")]
    end

    def title
      if event_type == "IncrementalSnapshot" && event_source == "MouseInteraction" &&
          MOUSE_INTERACTIONS[event_data.dig("data", "type")] == "Click"
        "Mouse Click"
      else
        event_type
      end
    end

    def page
      event_data.dig("data", "href")
    end
  end
end
