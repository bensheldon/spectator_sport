# frozen_string_literal: true

require 'rails_helper'

describe SpectatorSport::Event, type: :model do
  describe ".parse_custom_event" do
    context "when data doesn't contain spectator_sport event" do
      let(:data) do
        { "type"=>2, "tagName"=>"meta", "attributes"=>{ "name"=>"some_other_package-event", "content"=>"error500" } }
      end

      it "doesn't find anything" do
        expect(SpectatorSport::Event.parse_custom_event(data.to_s)).to be_nil
      end
    end

    context "when data contains spectator_sport event" do
      let(:data) do
        { "type"=>2, "tagName"=>"meta", "attributes"=>{ "name"=>"spectator_sport-event", "content"=>"error500" } }
      end

      let(:complex_data) do
        { "type"=>2, "data"=>{ "node"=>{ "type"=>0, "childNodes"=>[ { "type"=>1, "name"=>"html", "publicId"=>"", "systemId"=>"", "id"=>2 }, { "type"=>2, "tagName"=>"html", "attributes"=>{}, "childNodes"=>[ { "type"=>2, "tagName"=>"head", "attributes"=>{}, "childNodes"=>[ { "type"=>3, "textContent"=>"\n ", "id"=>5 }, { "type"=>2, "tagName"=>"title", "attributes"=>{}, "childNodes"=>[ { "type"=>3, "textContent"=>"We're sorry, but something went wrong (500)", "id"=>7 } ], "id"=>6 }, { "type"=>3, "textContent"=>"\n ", "id"=>8 }, { "type"=>2, "tagName"=>"meta", "attributes"=>{ "name"=>"viewport", "content"=>"width=device-width,initial-scale=1" }, "childNodes"=>[], "id"=>9 }, { "type"=>3, "textContent"=>"\n ", "id"=>10 }, { "type"=>2, "tagName"=>"meta", "attributes"=>{ "name"=>"spectator_sport-event", "content"=>"error500" }, "childNodes"=>[], "id"=>11 }, { "type"=>3, "textContent"=>"\n ", "id"=>12 }, { "type"=>2, "tagName"=>"style", "attributes"=>{}, "childNodes"=>[ { "type"=>3, "textContent"=>".rails-default-error-page { background-color: rgb(239, 239, 239); color: rgb(46, 47, 48); text-align: center; font-family: arial, sans-serif; margin: 0px; }.rails-default-error-page div.dialog { width: 95%; max-width: 33em; margin: 4em auto 0px; }.rails-default-error-page div.dialog > div { border-width: 4px 1px 1px; border-style: solid; border-image: none; border-color: rgb(176, 1, 0) rgb(153, 153, 153) rgb(187, 187, 187); border-top-left-radius: 9px; border-top-right-radius: 9px; background-color: white; padding: 7px 12% 0px; box-shadow: rgba(50, 50, 50, 0.17) 0px 3px 8px; }.rails-default-error-page h1 { font-size: 100%; color: rgb(115, 14, 21); line-height: 1.5em; }.rails-default-error-page div.dialog > p { margin: 0px 0px 1em; padding: 1em; background-color: rgb(247, 247, 247); border-width: 1px; border-style: solid; border-image: none; border-color: rgb(218, 218, 218) rgb(153, 153, 153) rgb(153, 153, 153); border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; color: rgb(102, 102, 102); box-shadow: rgba(50, 50, 50, 0.17) 0px 3px 8px; }", "isStyle"=>true, "id"=>14 } ], "id"=>13 }, { "type"=>3, "textContent"=>"\n\n ", "id"=>15 }, { "type"=>2, "tagName"=>"script", "attributes"=>{ "defer"=>"", "src"=>"http://127.0.0.1:3000/spectator_sport/events.js" }, "childNodes"=>[], "id"=>16 }, { "type"=>3, "textContent"=>"\n", "id"=>17 } ], "id"=>4 }, { "type"=>3, "textContent"=>"\n\n", "id"=>18 }, { "type"=>2, "tagName"=>"body", "attributes"=>{ "class"=>"rails-default-error-page" }, "childNodes"=>[ { "type"=>3, "textContent"=>"\n ", "id"=>20 }, { "type"=>5, "textContent"=>" This file lives in public/500.html ", "id"=>21 }, { "type"=>3, "textContent"=>"\n ", "id"=>22 }, { "type"=>2, "tagName"=>"div", "attributes"=>{ "class"=>"dialog" }, "childNodes"=>[ { "type"=>3, "textContent"=>"\n ", "id"=>24 }, { "type"=>2, "tagName"=>"div", "attributes"=>{}, "childNodes"=>[ { "type"=>3, "textContent"=>"\n ", "id"=>26 }, { "type"=>2, "tagName"=>"h1", "attributes"=>{}, "childNodes"=>[ { "type"=>3, "textContent"=>"We're sorry, but something went wrong.", "id"=>28 } ], "id"=>27 }, { "type"=>3, "textContent"=>"\n ", "id"=>29 } ], "id"=>25 }, { "type"=>3, "textContent"=>"\n ", "id"=>30 }, { "type"=>2, "tagName"=>"p", "attributes"=>{}, "childNodes"=>[ { "type"=>3, "textContent"=>"If you are the application owner check the logs for more information.", "id"=>32 } ], "id"=>31 }, { "type"=>3, "textContent"=>"\n ", "id"=>33 } ], "id"=>23 }, { "type"=>3, "textContent"=>"\n\n\n", "id"=>34 } ], "id"=>19 } ], "id"=>3 } ], "id"=>1 }, "initialOffset"=>{ "left"=>0, "top"=>0 } }, "timestamp"=>1735497977728 }
      end

      it "finds event in page meta" do
        expect(SpectatorSport::Event.parse_custom_event(data.to_s)).to eq "error500"
        expect(SpectatorSport::Event.parse_custom_event(complex_data.to_s)).to eq "error500"
      end
    end
  end
end
