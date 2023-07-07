let composer, saoPass, fxaaPass, afterimagePass, bloomPass;

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {SAOPass} from 'three/examples/jsm/postprocessing/SAOPass.js';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass.js';
import {GammaCorrectionShader} from 'three/examples/jsm/shaders/GammaCorrectionShader.js';
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader.js';
import {AfterimagePass} from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0xffffff, 1);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight,
  1,
  10000
);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.update();

document.getElementById('canvas').appendChild(renderer.domElement);

// Create ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Create directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Define the shape as a cube geometry
const shape = new THREE.BoxGeometry(1, 1, 1);

// Generate random number of cubes (between 5 and 50)
const numCubes = Math.floor(Math.random() * 46) + 5;
// function buildCube(){
// Create and position the cubes
for (let i = 0; i < numCubes; i++) {
  const material = new THREE.MeshPhongMaterial({
    color: 0xffffff, // Set color to white
  });
  const mesh = new THREE.Mesh(shape, material);
  mesh.scale.x = Math.random() - 0.5;
  mesh.scale.y = Math.random() - 0.5;
  mesh.scale.z = Math.random() - 0.5;
  mesh.position.set(
    Math.random() - 0.5,
    Math.random() - 0.5,
    Math.random() - 0.5
  );
  scene.add(mesh);
  // setTimeout(buildCube,50)
  // }
}

// Create post-processing composer
composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// Add SSAO effect
saoPass = new SAOPass(scene, camera, false, true);

saoPass.params.saoBias = 0.0001;
saoPass.params.saoIntensity = 0.004;
saoPass.params.saoScale = 10;
saoPass.params.saoKernelRadius = 100;
saoPass.params.saoMinResolution = 0.00001;
saoPass.params.saoBlur = true;
saoPass.params.saoBlurRadius = 0.1;
saoPass.params.saoBlurStdDev = 1;
saoPass.params.saoBlurDepthCutoff = 0.1;
composer.addPass(saoPass);

fxaaPass = new ShaderPass(FXAAShader);
const pixelRatio = renderer.getPixelRatio();
composer.addPass(fxaaPass);

// afterimagePass = new AfterimagePass();
// afterimagePass.damp = 0.9999;
// composer.addPass( afterimagePass );

bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.61,
  0.4,
  0.85
);
bloomPass.threshold = 0.76;
bloomPass.radius = 2.1;
composer.addPass(bloomPass);

let rotX = (Math.random() - 0.5) * 0.01;
let rotY = (Math.random() - 0.5) * 0.01;

console.log(rotY);

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cubes
  scene.rotation.x += rotX;
  scene.rotation.y += rotY;

  // Render the scene with post-processing
  composer.render();

  // Render the scene without post-processing
  // renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});
