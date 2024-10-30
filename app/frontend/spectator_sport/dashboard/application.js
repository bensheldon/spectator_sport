/*jshint esversion: 6, strict: false */

import "turbo";
import { Application } from "stimulus";
import ThemeController from "theme_controller";
window.Stimulus = Application.start();
Stimulus.register("theme", ThemeController);
