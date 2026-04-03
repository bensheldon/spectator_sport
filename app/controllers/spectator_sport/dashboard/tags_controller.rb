module SpectatorSport
  module Dashboard
    class TagsController < ApplicationController
      def show
        @tag = params[:name]
        @session_windows = SpectatorSport::SessionWindowTag
          .where(tag: @tag)
          .includes(:session_window)
          .order(created_at: :desc)
          .limit(50)
          .map(&:session_window)
      end
    end
  end
end
