# Spectator Sport

Record and replay browser sessions in a self-hosted Rails Engine.

Spectator Sport uses the [`rrweb` library](https://www.rrweb.io/) to create recordings of your website's DOM as your users interact with it. These recordings are stored in your database for replay by developers and administrators to analyze user behavior, reproduce bugs, and make building for the web more fun.

🚧 🚧 _This gem is very early in its development lifecycle and will undergo significant changes on its journey to v1.0. I would love your feedback and help in co-developing it, just fyi that it's going to be so much better than it is right now._

🚧 🚧 **Future Roadmap:**

- ✅ Proof of concept and technical demo
- ✅ Running in production on Ben Sheldon's personal business websites
- ◻️ Publish manifesto of principles and intent
- ◻️ Reliable and efficient event stream transport
- ◻️ Player dashboard design using Bootstrap and Turbo
- ◻️ Automatic cleanup of old recordings to minimize database space
- ◻️ Identity methods for linking application users to recordings
- ◻️ Privacy controls with masked recording by default
- ◻️ Automated installation process with Rails generators
- ◻️ Fully documented installation process
- ◻️ Release v1.0 🎉
- ◻️ Live streaming replay of recordings
- ◻️ Searching / filtering of recordings, including navigation and 404s/500s, button clicks, rage clicks, dead clicks, etc.
- ◻️ Custom events
- 💖 Your feedback and ideas. Please open an Issue or Discussion or even a PR modifying this Roadmap. I'd love to chat!

## Installation

The Spectator Sport gem is conceptually two parts packaged together in this single gem and mounted in your application:

1. The Recorder, including javascript that runs in the client browser and produces a stream of events, an API endpoint to receive those events, and database migrations and models to store the events as a cohesive recording.
2. The Player Dashboard, an administrative dashboard to view and replay stored recordings

To install Spectator Sport in your Rails application:

1. Add `spectator_sport` to your application's Gemfile and install the gem:
    ```bash
    bundle add spectator_sport
    ```
2. Install Spectator Sport in your application. _🚧 This will change on the path to v1._ Explore the `/demo` app as live example:
    - Create database migrations with `bin/rails g spectator_sport:install:migrations`. Apply migrations with `bin/rails db:prepare`
    - Mount the recorder API in your application's routes with `mount SpectatorSport::Engine, at: "/spectator_sport, as: :spectator_sport"`
    - Add the `spectator_sport_script_tags` helper to the bottom of the `<head>` of `layout/application.rb`. Example:
        ```erb
        <%# app/views/layouts/application.html.erb %>
          <%# ... %>
          <%= spectator_sport_script_tags %>
        </head>
        ```

    - Add a `<script>` tag to `public/404.html`, `public/422.html`, and `public/500/html` error pages. Example:
        ```erb
        <!-- public/404.html -->
          <!-- ... -->
          <script defer src="/spectator_sport/events.js"></script>
        </head>
        ```
3. You must manually install and set up authorization for the Player Dashboard. You probably shouldn't make it public. If you are using Devise, authorizing admins might look like this:

    ```ruby
    # config/routes.rb
    authenticate :user, ->(user) { user.admin? } do
      mount SpectatorSport::Dashboard::Engine, at: 'spectator_sport_dashboard', as: :spectator_sport_dashboard
    end
    ```

    Or set up Basic Auth:
    ```ruby
    # config/initializers/spectator_sport.rb
    SpectatorSport::Dashboard::Engine.middleware.use(Rack::Auth::Basic) do |username, password|
      ActiveSupport::SecurityUtils.secure_compare(Rails.application.credentials.spectator_sport_username, username) &
      ActiveSupport::SecurityUtils.secure_compare(Rails.application.credentials.spectator_sport_password, password)
    end
    ```

    Or extend the `SpectatorSport::Dashboard::ApplicationController` with your own authorization logic:
    ```ruby
    # config/initializers/good_job.rb
    ActiveSupport.on_load(:spectator_sport_dashboard_application_controller) do
      # context here is SpectatorSport::Dashboard::ApplicationController

      before_action do
        raise ActionController::RoutingError.new('Not Found') unless current_user&.admin?
      end

      def current_user
        # load current user from session, cookies, etc.
      end
     end
     ```

## Contributing

💖 Please don't be shy about opening an issue or half-baked PR. Your ideas and suggestions are more important to discuss than a polished/complete code change.

This repository is intended to be simple and easy to run locally with a fully-featured demo application for immediately seeing the results of your proposed changes:

```bash
# 1. Clone this repository via git
# 2. Set it up locally
bundle install
# 3. Run the demo Rails application:
bin/rails s
# 4. Load the demo application in your browser
open http://localhost:3000
# 5. Make changes, see the result, commit and make a PR!
```

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
