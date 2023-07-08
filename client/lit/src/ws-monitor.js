import {html, css, LitElement} from 'lit';

class WsMonitor extends LitElement {
  static styles = css`
    .container {
      font-size: 10px;
      font-family: monospace;
      position: fixed;
      color: black;
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
      margin-top: 5px;
    }
    input {
      background-color: transparent;
      border: 0px;
      border-bottom: 1px solid black;
      color: black;
    }

    input:focus {
      outline: none;
    }
    .channels {
      display: flex;
      width: 100%;
    }
    .channels ul {
      padding: 0px;
      flex-grow: 1;
    }

    .channels li {
      margin-left: 20px;
    }

    .scrollable {
      overflow: scroll;
      max-height: 200px;
    }
  `;

  static get properties() {
    return {
      wsClient: {type: Object, reflect: true},
      _visible: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.message = '';
    this.targetChannel = '';
    this.targetId = '';
    this.messageIsValidJSON = false;
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
    // Handle the keypress event here
    if (event.key === '=') this._viewToggleHandler();
  }

  _viewToggleHandler() {
    this._visible = !this._visible;
  }

  handleMessageInput(e) {
    this.message = e.target.value;
    this.messageIsValidJSON = this.isValidJSON(this.message);
  }

  handleTargetChannelInput(e) {
    this.targetChannel = e.target.value;
  }

  handleTargetIdInput(e) {
    this.targetId = e.target.value;
  }

  handleSubmitWsUrl(e) {
    e.preventDefault();
    this.wsClient.setWsUrl(e.target.wsUrl.value);
  }

  isValidJSON(message) {
    try {
      JSON.parse(message);
      return true;
    } catch (e) {
      return false;
    }
  }

  render() {
    if (!this.wsClient) return;

    const {
      ws,
      wsUrl,
      history,
      joinedChannels,
      availableChannels,
      id,
      wsState,
      joinChannel,
    } = this.wsClient;

    const body = html`
      <div class="main">
        ${ws && wsUrl ? html`<div>${wsState}: ${wsUrl}</div> ` : ''}
        ${id ? html` <div>client id: ${id}</div> ` : ''}
        <form @submit=${joinChannel}>
          <input type="text" name="channel" />
          <button type="submit">join channel</button>
        </form>
        <div class="channels">
          <ul>
            joined channels:
            ${joinedChannels.map(
              ({channel, members}) => html`
                <li class="ml-2">
                  ${channel} (${members.length})
                  <ul>
                    ${members.map(
                      (member) =>
                        html`<li>${member === id ? 'me' : member}</li>`
                    )}
                  </ul>
                </li>
              `
            )}
          </ul>
          <ul>
            all channels:
            ${availableChannels.map(
              ({channel, members}) => html`
                <li class="ml-2">
                  ${channel} (${members.length})
                  <ul>
                    ${members.map(
                      (member) =>
                        html`<li>${member === id ? 'me' : member}</li>`
                    )}
                  </ul>
                </li>
              `
            )}
          </ul>
        </div>
        <div>message history:</div>
        <div class="scrollable">
          ${history.map((data) => html` <div>${JSON.stringify(data)}</div> `)}
        </div>
      </div>
    `;

    const toggleButton = html`<div class="view-toggle">
      <button @click=${this._viewToggleHandler}>
        ${this._visible ? '-' : '+'}
      </button>
    </div>`;

    return html`
      <div class="container">
        <div>
          ${toggleButton}
          <div>${this._visible ? body : ''}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('ws-monitor', WsMonitor);
