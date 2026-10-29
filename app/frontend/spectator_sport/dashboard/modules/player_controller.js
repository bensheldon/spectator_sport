// hello_controller.js
import { Controller } from "stimulus"
import { Player } from  'rrweb-player';

// The recorder numbers each event (spectatorSportSeq); a jump in the numbers means events
// were lost in transit. Gaps are shown as custom-event markers on the player's timeline.
const GAP_TAG = "spectator_sport:gap";
const GAP_COLOR = "#dc3545";

export default class extends Controller {
  static values = {
    events: { type: Array, default: [] },
  }

  static targets = [ "player", "events", "linkUrl" ]

  connect() {
    if (this.eventsValue.length === 0) return;

    this.lastSeq = null;

    this.player = new Player({
      target: this.playerTarget,
      props: {
        events: this.#withGapMarkers(this.eventsValue),
        tags: { [GAP_TAG]: GAP_COLOR },
        liveMode: true,
        skipInactive: false,
        speedOption: [1, 2, 4, 8, 16],
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
    this.#withGapMarkers(events).forEach(event => {
      this.player.addEvent(event);
    });

    element.remove();
  }

  // Returns the events with a marker inserted before each event that follows missing ones.
  // Events from older recorders have no sequence number and are left alone.
  #withGapMarkers(events) {
    const result = [];
    const sequenced = events
      .filter(event => Number.isInteger(event.spectatorSportSeq))
      .sort((a, b) => a.spectatorSportSeq - b.spectatorSportSeq);
    const markers = new Map();
    for (const event of sequenced) {
      if (this.lastSeq !== null && event.spectatorSportSeq > this.lastSeq + 1) {
        markers.set(event, {
          type: 5,
          timestamp: event.timestamp,
          data: { tag: GAP_TAG, payload: { missing: event.spectatorSportSeq - this.lastSeq - 1 } },
        });
      }
      this.lastSeq = Math.max(this.lastSeq ?? 0, event.spectatorSportSeq);
    }
    for (const event of events) {
      if (markers.has(event)) result.push(markers.get(event));
      result.push(event);
    }
    return result;
  }

  disconnect() {
    this.player?.$destroy();
  }
}
