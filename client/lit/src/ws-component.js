import {LitElement, html, css} from 'lit';

class WsComponent extends LitElement {
  static styles = css`
    p {
      color: green;
    }
  `;

  static get properties() {
    return {
      wsClient: {type: Object, reflect: true},
    };
  }

  render() {
    if (!this.wsClient) return html`<p>loading...</p>`;

    return html`<p>${this.wsClient.wsUrl}</p>`;
  }
}

customElements.define('ws-component', WsComponent);
