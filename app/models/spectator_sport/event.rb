module SpectatorSport
  class Event < ApplicationRecord
    PAGE_LIMIT = 1_000

    belongs_to :session
    belongs_to :session_window

    scope :page_after, ->(event) { (event ? where("(created_at, id) > (?, ?)", event.created_at, event.id) : self).order(created_at: :asc, id: :asc).limit(PAGE_LIMIT) }
  end
end
