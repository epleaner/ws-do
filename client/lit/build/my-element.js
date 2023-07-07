import{s as t,i as e,x as n}from"./lit-element-e2cff98b.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class o extends t{static get styles(){return e`:host{display:block;border:solid 1px gray;padding:16px;max-width:800px}`}static get properties(){return{name:{type:String},count:{type:Number}}}constructor(){super(),this.name="World",this.count=0}render(){return n`<h1>${this.sayHello(this.name)}!</h1><button @click="${this._onClick}" part="button">Click Count: ${this.count}</button><slot></slot>`}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}sayHello(t){return`Hello, ${t}`}}window.customElements.define("my-element",o);export{o as MyElement};
