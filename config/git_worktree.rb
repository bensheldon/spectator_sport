# frozen_string_literal: true

# Helper for Git worktree-aware behavior
module GitWorktree
  PROJECT_ROOT = File.expand_path("..", __dir__)

  def self.name
    return @_name if defined?(@_name)

    git_dir = `git rev-parse --git-dir 2>/dev/null`.strip
    return @_name = nil if git_dir.empty? || !git_dir.include?("/.git/worktrees/")

    # Conductor renames the branch after setup runs, so use the worktree directory
    # name (set at worktree creation) for a stable identifier during setup.
    @_name = normalize(File.basename(git_dir))
  end

  def self.normalize(text)
    text.gsub(/[^a-zA-Z0-9_]/, "_").squeeze("_").downcase
  end
  private_class_method :normalize

  # Ports blocked by Chrome (net::ERR_UNSAFE_PORT). Only lists ports relevant to
  # common development port ranges (1024+).
  CHROME_UNSAFE_PORTS = [ 2049, 3659, 4045, 5060, 5061, 6000, 6566, 6665, 6666, 6667, 6668, 6669, 6697, 10080 ].freeze

  # Returns a deterministic integer from +range+ based on the current worktree name.
  # Returns +range.first+ when not in a worktree (e.g. main branch).
  #
  # Slots that contain any Chrome-unsafe port are excluded from selection.
  def self.integer(range, stride: 1)
    value = name
    return range.first if value.nil?

    require "zlib"
    safe_starts = range.step(stride).reject do |start|
      (start...(start + stride)).any? { |port| CHROME_UNSAFE_PORTS.include?(port) }
    end
    safe_starts[Zlib.crc32(value) % safe_starts.size]
  end
end
