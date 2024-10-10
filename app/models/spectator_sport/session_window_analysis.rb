module SpectatorSport
  class SessionWindowAnalysis
    def initialize(session_window)
      @session_window = session_window
    end

    def visited_pages
      @session_window.events.map { _1.page }.compact
    end

    def tags # simple naive implementation of tagging sessions
      tags = []
      tags << "server_error" if visited_pages.any? { _1.include?("500.html") }
      tags
    end
  end
end
