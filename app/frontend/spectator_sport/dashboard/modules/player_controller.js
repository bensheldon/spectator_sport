// hello_controller.js
import { Controller } from "stimulus"
import { Player } from  'rrweb-player';

export default class extends Controller {
  static values = {
    events: { type: Array, default: [] },
  }

  connect() {
    this.player = new Player({
      target: this.element,
      props: {
        events: this.eventsValue,
      }
    });

    const playerElement = this.element.getElementsByClassName("rr-player")[0];
    playerElement.style.width = "100%";
    playerElement.style.height = null;
    playerElement.style.float = "none"
    playerElement.style["border-radius"] = "inherit";
    playerElement.style["box-shadow"] = "none";
  }

  disconnect() {
    this.player?.$destroy();
  }
}
