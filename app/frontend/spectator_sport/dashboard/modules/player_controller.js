// hello_controller.js
import { Controller } from "stimulus"
import { Player } from  'rrweb-player';

export default class extends Controller {
  static values = {
    events: { type: Array, default: [] },
  }

  static targets = [ "player", "events", "linkUrl" ]

  connect() {
    if (this.eventsValue.length === 0) return;

    this.player = new Player({
      target: this.playerTarget,
      props: {
        events: this.eventsValue,
        liveMode: true,
      }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const time = urlParams.get('t');
    if (time) {
      const seconds = parseInt(time);
      this.player.getReplayer().play(seconds * 1000);
    }

    let lastSeconds = null;
    this.player.addEventListener('ui-update-current-time', (event) => {
      const seconds = Math.floor(event.payload / 1000);
      if (seconds === lastSeconds) return;
      lastSeconds = seconds;
      const url = `${window.location.origin}${window.location.pathname}?t=${seconds}`;
      this.linkUrlTarget.value = `?t=${seconds}`;
      this.linkUrlTarget.dataset.url = url;
    });

    this.#keepScrubberEnabled();

    const playerElement = this.playerTarget.getElementsByClassName("rr-player")[0];
    playerElement.style.width = "100%";
    playerElement.style.height = null;
    playerElement.style.float = "none"
    playerElement.style["border-radius"] = "inherit";
    playerElement.style["box-shadow"] = "none";
  }

  eventsTargetConnected(element) {
    if (!this.player) return;

    const events = JSON.parse(element.dataset.events);
    events.forEach(event => {
      this.player.addEvent(event);
    });

    element.remove();
  }

  // rrweb disables the scrubber during fast-forward (skip inactive); strip it so users can still seek
  #keepScrubberEnabled() {
    const progress = this.playerTarget.querySelector('.rr-progress');
    if (progress) {
      this.scrubberObserver = new MutationObserver(() => progress.classList.remove('disabled'));
      this.scrubberObserver.observe(progress, { attributeFilter: ['class'] });
    }
  }

  disconnect() {
    this.scrubberObserver?.disconnect();
    this.player?.$destroy();
  }
}
