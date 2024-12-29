source "https://rubygems.org"

if File.exist?(".ruby-version")
  ruby file: ".ruby-version"
end

# Specify your gem's dependencies in spectator_sport.gemspec.
gemspec

gem "puma"

gem "sqlite3"
gem "pg"

gem "sprockets-rails"

# Omakase Ruby styling [https://github.com/rails/rubocop-rails-omakase/]
gem "rubocop-rails-omakase", require: false

# Start debugger with binding.b [https://github.com/ruby/debug]
# gem "debug", ">= 1.0.0"

group :test do
  gem "capybara"
  gem "rspec-rails"
  gem "selenium-webdriver"
  gem "warning"
end
