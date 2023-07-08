import {html, css, LitElement} from 'lit';

class WsMonitor extends LitElement {
  static styles = css`
    .flex {
      display: flex;
    }
    .gap-4 {
      gap: 4px;
    }
    .gap-8 {
      gap: 8px;
    }
    .ml-2 {
      margin-left: 2px;
    }
    .scrollable {
      overflow: scroll;
      height: 200px;
    }
  `;

  static get properties() {
    return {
      wsClient: {type: Object, reflect: true},
    };
  }

  constructor() {
    super();
    this.message = '';
    this.targetChannel = '';
    this.targetId = '';
    this.messageIsValidJSON = false;
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
      getChannels,
      heartbeat,
      broadcastMessage,
      sendMessageToTargetClient,
      sendMessageToTargetChannel,
      sendMessageToJoinedChannels,
    } = this.wsClient;

    return html`
      <div class="flex flex-col gap-4">
        <div class="flex gap-8">
          ${ws && wsUrl ? html` <div>${wsState} on: ${wsUrl}</div> ` : ''}
          <form @submit=${this.handleSubmitWsUrl}>
            <input type="text" name="wsUrl" placeholder=${wsUrl} />
            <button type="submit">go</button>
          </form>
        </div>

        ${ws
          ? html`
              <div>
                ${id ? html` <div>id: ${id}</div> ` : ''}
                ${heartbeat
                  ? html` <div>heartbeat: ${JSON.stringify(heartbeat)}</div> `
                  : ''}
              </div>

              <div>
                <div class="flex flex-row gap-8">
                  <button @click=${getChannels}>get channels</button>
                  <form @submit=${joinChannel}>
                    <input type="text" name="channel" />
                    <button type="submit" class="ml-2">join channel</button>
                  </form>
                </div>
                <ul>
                  my channels:
                  ${joinedChannels.map(
                    ({channel, members}) => html`
                      <li class="ml-2">
                        ${channel} | ${members.length} members:
                        ${members.join(', ')}
                      </li>
                    `
                  )}
                </ul>
                <ul>
                  all channels:
                  ${availableChannels.map(
                    ({channel, members}) => html`
                      <li class="ml-2">
                        ${channel}
                        ${members.length
                          ? `| ${members.length} members: ${members.join(', ')}`
                          : '(no members)'}
                      </li>
                    `
                  )}
                </ul>
              </div>

              <div>
                <div class="flex flex-col gap-1">
                  <div>
                    <label for="message">message</label>
                    <textarea
                      cols="100"
                      rows="1"
                      name="message"
                      placeholder='{"hello": 1}'
                      .value=${this.message}
                      @input=${this.handleMessageInput}
                    ></textarea>
                  </div>
                  <div>
                    <label for="targetChannel">target channel</label>
                    <input
                      name="targetChannel"
                      type="text"
                      .value=${this.targetChannel}
                      @input=${this.handleTargetChannelInput}
                    />
                  </div>
                  <div>
                    <label for="targetChannel">target client</label>
                    <input
                      name="targetId"
                      type="text"
                      .value=${this.targetId}
                      @input=${this.handleTargetIdInput}
                    />
                  </div>
                  <div>
                    <button
                      ?disabled=${!this.messageIsValidJSON}
                      @click=${() =>
                        sendMessageToTargetClient(this.message, this.targetId)}
                    >
                      send to another client
                    </button>
                    <button
                      ?disabled=${!this.messageIsValidJSON}
                      @click=${() =>
                        sendMessageToTargetChannel(
                          this.message,
                          this.targetChannel
                        )}
                    >
                      send to channel
                    </button>
                    <button
                      ?disabled=${!this.messageIsValidJSON}
                      @click=${() => sendMessageToJoinedChannels(this.message)}
                    >
                      send to joined channel
                    </button>
                    <button
                      ?disabled=${!this.messageIsValidJSON}
                      @click=${() => broadcastMessage(this.message)}
                    >
                      broadcast
                    </button>
                  </div>
                </div>
                ${!this.messageIsValidJSON && this.message.length
                  ? html` <div>Invalid JSON</div> `
                  : ''}
              </div>

              <div>incoming messages:</div>
              <div class="scrollable">
                ${history.map(
                  (data) => html` <div>${JSON.stringify(data)}</div> `
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }
}

customElements.define('ws-monitor', WsMonitor);
