module SpectatorSport
  class SessionWindowAnalysis
    def initialize(session_window)
      @session_window = session_window
    end

    def visited_pages
      @session_window.events.map { _1.page }.compact
    end

    def tags # WIP simple naive implementation of tagging sessions
      tags = []
      tags
    end
  end
end
