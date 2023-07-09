import {html, css, LitElement} from 'lit';

class MIDISelector extends LitElement {
  static styles = css`
    .container {
      font-size: 10px;
      font-family: monospace;
      position: fixed;
      right: 0px;
      color: black;
    }
    select {
      background-color: transparent;
      border: 0px;
      color: black;
      font-size: 10px;
    }

    select:focus {
      outline: none;
    }
    button {
      font-size: 10px;
      background-color: rgba(255, 192, 203, 0.5);
      border: none;
    }
    button:active {
      background-color: rgba(255, 192, 203, 0.7);
    }
    button:disabled {
      background-color: gray;
    }
    .main {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      background-color: pink;
      background-color: rgba(255, 192, 203, 0.5);
      padding: 10px;
      border-radius: 4px;
    }
  `;

  static get properties() {
    return {
      _visible: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this._visible = true;
  }

  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener('keydown', this.handleKeyPress.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.body.removeEventListener(
      'keydown',
      this.handleKeyPress.bind(this)
    );
  }

  handleKeyPress(event) {
    if (event.shiftKey && event.code === 'Space') this._viewToggleHandler();
  }

  _viewToggleHandler() {
    this._visible = !this._visible;
  }

  render() {
    if (!this._visible) return;

    const body = html`<div class="main">
      <div>
        <label for="device-select">Select MIDI Device:</label>
        <select id="device-select"></select>
      </div>
    </div>`;

    return html`<div class="container">${body}</div> `;
  }
}

customElements.define('midi-selector', MIDISelector);
