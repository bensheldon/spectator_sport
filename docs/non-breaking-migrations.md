# Non-Breaking Migrations in Rails Gems

When shipping a gem that adds database tables, host applications must opt in to migrations. This means the gem must degrade gracefully if a migration hasn't been applied yet — queries against non-existent tables will crash.

This pattern is adapted from [GoodJob's approach](https://github.com/bensheldon/good_job/blob/main/app/models/good_job/base_record.rb).

---

## Pattern: `migrated?` class method

On any model that lives in an optional/incremental migration, add a `migrated?` class method:

```ruby
class SessionWindowTag < ApplicationRecord
  def self.migrated?
    return true if table_exists?

    Rails.logger.warn "SpectatorSport: pending migration for spectator_sport_session_window_tags table. Run: rails spectator_sport:install:migrations && rails db:migrate"
    false
  end
end
```

For **column-level** additions to an existing table (instead of a whole new table), use:

```ruby
def self.some_column_migrated?
  column_names.include?("some_column")
end
```

---

## Usage: gate all queries behind `migrated?`

**In controllers:**
```ruby
if SpectatorSport::SessionWindowTag.migrated?
  # safe to query
end
```

**In views:**
```erb
<% if SpectatorSport::SessionWindowTag.migrated? %>
  <%# show tag UI %>
<% end %>
```

**In models (for associations):**
```ruby
def tags
  return [] unless SessionWindowTag.migrated?
  session_window_tags.to_a
end
```

---

## Gotchas

- `table_exists?` hits the database schema cache. It's fast but not free — avoid calling it in tight loops.
- `column_names` is cached per-process. After a live migration, call `reset_column_information` if needed.
- The `has_many` association itself doesn't cause queries — only triggering it does. So declaring `has_many :session_window_tags` is safe even without the table; just gate any `.session_window_tags` calls behind `migrated?`.

---

## Test setup

When testing generator specs that drop/recreate tables, update `spec/support/example_app_helper.rb` to include new models in the `models` array so they get reset between tests:

```ruby
models = [
  SpectatorSport::Event,
  SpectatorSport::Session,
  SpectatorSport::SessionWindow,
  SpectatorSport::SessionWindowTag,  # add new models here
]
```

---

## DB setup for development / CI

The host app runs:
```sh
rails spectator_sport:install:migrations
rails db:migrate
```

Until they do, the gem silently skips the feature and logs a warning.
