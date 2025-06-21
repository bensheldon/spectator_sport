/*jshint esversion: 6, strict: false */

import "turbo";
import { Application } from "stimulus";

window.Stimulus = Application.start();


import ThemeController from "theme_controller";
import PlayerController from "player_controller";
Stimulus.register("theme", ThemeController);
Stimulus.register("player", PlayerController);
