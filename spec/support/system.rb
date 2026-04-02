# frozen_string_literal: true

require "capybara/rspec"
require "capybara/cuprite"

Capybara.default_max_wait_time = 2
Capybara.server = :puma, { Silent: true }
Capybara.disable_animation = true # injects CSP-incompatible CSS and JS

module SystemTestHelpers
  [
    :accept_alert,
    :dismiss_alert,
    :accept_confirm,
    :dismiss_confirm,
    :accept_prompt,
    :dismiss_prompt,
    :accept_modal,
    :dismiss_modal
  ].each do |driver_method|
    define_method(driver_method) do |text = nil, **options, &blk|
      super(text, **options, &blk)
    rescue Capybara::NotSupportedByDriverError
      blk.call
    end
  end
end

RSpec.configure do |config|
  config.include ActionView::RecordIdentifier, type: :system
  config.include SystemTestHelpers, type: :system

  config.before(:each, type: :system) do
    ActiveRecord::Base.connection.disable_query_cache!

    require File.expand_path("../../config/git_worktree", __dir__)
    Capybara.server_port = GitWorktree.integer(4000..4990, stride: ENV.fetch("PARALLEL_TEST_GROUPS", 1).to_i) + ENV.fetch("TEST_ENV_NUMBER", 0).to_i

    driven_by(
      :cuprite,
      screen_size: [ 1024, 800 ],
      options: {
        headless: ENV["SHOW_BROWSER"] ? false : true,
        browser_options: ENV["DOCKER"] ? { "no-sandbox" => nil } : {},
      }
    )
  end
end
