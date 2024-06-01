import * as THREE from "three";
import { updateDebugWindow } from "./src/DebuggWindow";
import { initFloor } from "./src/Floor";
import { init3DHelperGrid } from "./src/GridHelper";
import {
	handleKeyboardMovementInput,
	handleOtherKeyBoardInput,
	initKeyboard,
} from "./src/KeyboardInput";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

init3DHelperGrid(scene);
const floor = initFloor();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube, floor);

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);

	handleKeyboardMovementInput(camera);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	updateDebugWindow(camera.position);

	renderer.render(scene, camera);
}

initKeyboard();
handleOtherKeyBoardInput();
animate();

/* 
	TODO: 
	make a new div component called a debug wrapper
	should i hard code it into the html or build it dynamicly? 
	For example: on button presse let div = document.createElement("div")
*/
