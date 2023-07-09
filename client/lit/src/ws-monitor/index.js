import WsClient from '../../../utils/WsClient.js';
import {observable, decorate} from 'mobx';
import {render, html} from 'lit';
import './webcomponent.js';

decorate(WsClient, {
  ws: observable,
  wsUrl: observable,
  history: observable,
  heartbeat: observable,
  joinedChannels: observable,
  availableChannels: observable,
  id: observable,
  incomingMessage: observable,
  handleMessage: observable,
});

window.wsClient = new WsClient();

const template = html`<ws-monitor .wsClient=${window.wsClient}></ws-monitor>`;

render(template, document.body, {renderBefore: document.body.firstChild});
