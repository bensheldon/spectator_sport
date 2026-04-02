import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "source", "button" ]

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.dataset.url ?? this.sourceTarget.value).then(() => {
      const originalText = this.buttonTarget.textContent;
      this.buttonTarget.textContent = 'Copied!';
      setTimeout(() => {
        this.buttonTarget.textContent = originalText;
      }, 2000);
    });
  }
}
