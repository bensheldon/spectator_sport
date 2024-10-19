module SpectatorSport
  module Dashboard
    module IconsHelper
      def render_icon(name, class: nil, **options)
        tag.svg(viewBox: "0 0 16 16", class: "svg-icon #{binding.local_variable_get(:class)}", **options) do
          tag.use(fill: "currentColor", href: "#{icons_path}##{name}")
        end
      end

      def icons_path
        @_icons_path ||= frontend_static_path(:icons, format: :svg, locale: nil)
      end
    end
  end
end
