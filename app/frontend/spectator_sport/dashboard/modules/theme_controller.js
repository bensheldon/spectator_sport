// hello_controller.js
import { Controller } from "stimulus"
export default class extends Controller {
  static targets = [ "dropdown", "button" ]

  connect() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const theme = localStorage.getItem('spectator_sport-theme');
      if (!["light", "dark"].includes(theme)) {
        this.setTheme(this.autoTheme());
      }
    });

    this.setTheme(this.getStoredTheme() || 'light');
  }

  change(event) {
    const theme = event.params.value;
    localStorage.setItem('spectator_sport-theme', theme);
    this.setTheme(theme);
  }

  setTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme === 'auto' ? this.autoTheme() : theme);

    this.buttonTargets.forEach((button) => {
      button.classList.remove('active');
      if (button.dataset.themeValueParam === theme) {
        button.classList.add('active');
      }
    });

    const svg = this.buttonTargets.filter(b => b.matches(".active"))[0]?.querySelector('svg');
    this.dropdownTarget.querySelector('svg').outerHTML = svg.outerHTML;
  }

  getStoredTheme() {
    return localStorage.getItem('spectator_sport-theme');
  }

  autoTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
}
