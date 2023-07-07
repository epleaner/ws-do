import {LitElement, html, css} from 'lit';

class WsComponent extends LitElement {
  static styles = css`
    p {
      color: green;
    }
  `;

  static get properties() {
    return {
      ws: {type: Object, reflect: true},
    };
  }

  render() {
    if (!this.ws) return html`<p>loading...</p>`;

    return html`<p>${this.ws.wsUrl}</p>`;
  }
}

customElements.define('ws-component', WsComponent);
