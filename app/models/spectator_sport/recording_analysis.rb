module SpectatorSport
  class RecordingAnalysis
    def initialize(recording)
      @recording = recording
    end

    def visited_pages
      @recording.events.map { _1.page }.compact
    end
  end
end
