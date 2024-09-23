require "bundler/setup"

APP_RAKEFILE = File.expand_path("demo/Rakefile", __dir__)
load "rails/tasks/engine.rake"

load "rails/tasks/statistics.rake"

require "bundler/gem_tasks"

# assets:precompile does not exist. call app:assets:precompile is used instead
task "assets:precompile" => "app:assets:precompile"
