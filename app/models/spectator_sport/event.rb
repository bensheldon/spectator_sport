module SpectatorSport
  class Event < ApplicationRecord
    belongs_to :session
    belongs_to :session_window

    Explanation = Struct.new(:title, :details)

    def explanation
      # taken from https://github.com/rrweb-io/rrweb/blob/9488deb6d54a5f04350c063d942da5e96ab74075/src/types.ts#L10
      event_types = %w[DomContentLoaded Load FullSnapshot IncrementalSnapshot Meta Custom]
      event_type = event_types[event_data["type"]]

      explanation = Explanation.new(event_type, [])

      event_sources = %w[Mutation MouseMove MouseInteraction Scroll ViewportResize Input TouchMove MediaInteraction
                        StyleSheetRule CanvasMutation Font Log Drag StyleDeclaration Selection AdoptedStyleSheet]

      if event_type == "Meta"
        explanation.details << "visited #{event_data.dig("data", "href")}"
      end

      if event_type == "IncrementalSnapshot"
        event_source = event_sources[event_data.dig("data", "source")]
        explanation.details << "source: #{event_source}"
      else
        event_source = nil
      end

      mouse_interactions =%w[MouseUp MouseDown Click ContextMenu DblClick Focus Blur TouchStart TouchMove_Departed
                              TouchEnd TouchCancel]

      if event_source == "MouseInteraction"
        mouse_interaction = mouse_interactions[event_data.dig("data", "type")]
        explanation.details << "#{mouse_interaction}"
      end

      explanation
    end

    def page
      event_data.dig("data", "href")
    end
  end
end
