// hello_controller.js
import { Controller } from "stimulus"
import { Player } from  'rrweb-player';

export default class extends Controller {
  static values = {
    events: { type: Array, default: [] },
    events_after: { type: Number, default: 0 },
  }

  connect() {
    this.player = new Player({
      target: this.element,
      props: {
        events: this.eventsValue,
        liveMode: true,
      }
    });

    if (window.location.hash) {
      const seconds = parseInt(window.location.hash.substring(1));
      this.player.getReplayer().play(seconds * 1000);
    }

    this.player.addEventListener('ui-update-current-time', (event) => {
      const seconds = parseInt(event.payload / 1000);
      window.location.hash = seconds;
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
