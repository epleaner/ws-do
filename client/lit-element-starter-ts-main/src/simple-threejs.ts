import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import * as THREE from 'three/build/three.module';

@customElement('simple-threejs')
export class SimpleThreeJS extends LitElement {
  constructor() {
    super();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);

    (function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    })();

    this.renderer = renderer;
  }

  static override styles = css`
    p {
      color: blue;
    }
  `;

  @property()
  name = 'Somebody';
  renderer;

  override firstUpdated() {
    const box = this.shadowRoot?.getElementById('box');
    box?.appendChild(this.renderer.domElement);
  }

  override render() {
    return html` <div id="box"></div> `;
  }
}
