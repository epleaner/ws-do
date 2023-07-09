import {render, html} from 'lit';
import './webcomponent.js';

const template = html`<midi-selector></midi-selector>`;

render(template, document.body, {renderBefore: document.body.firstChild});
