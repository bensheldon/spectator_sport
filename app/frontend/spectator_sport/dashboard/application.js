/*jshint esversion: 6, strict: false */

import "turbo";
import { Application } from "stimulus";

document.addEventListener("turbo:load", function() {
  document.documentElement.removeAttribute("data-turbo-not-loaded");
  document.documentElement.removeAttribute("data-turbo-loading");
});

document.addEventListener("turbo:submit-start", function(event) {
  if (!event.target.closest("turbo-frame")) {
    document.documentElement.setAttribute("data-turbo-loading", "1");
  }
});

document.addEventListener("turbo:submit-end", function(event) {
  if (!event.detail.fetchResponse?.redirected) {
    document.documentElement.removeAttribute("data-turbo-loading");
  }
});

window.Stimulus = Application.start();


import ThemeController from "theme_controller";
import PlayerController from "player_controller";
Stimulus.register("theme", ThemeController);
Stimulus.register("player", PlayerController);
