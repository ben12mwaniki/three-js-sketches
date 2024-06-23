import * as THREE from "three";
import {OrbitControls} from "jsm/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(w,h)
document.body.appendChild(renderer.domElement)

const fov = 75
const aspect = w/h
const near = 0.1
const far = 10
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 4
const scene = new THREE.Scene()

const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xffff00, wireframe: true });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500)
scene.add(hemiLight)

function animate(t){
    requestAnimationFrame(animate)
    torusKnot.rotation.y = t*0.0005
    renderer.render(scene, camera)
}

animate()