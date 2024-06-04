import * as THREE from "three";

import { initControls } from "./src/Controls";
import { updateDebugWindow } from "./src/DebuggWindow";
import { addFloorColision, initFloor } from "./src/Floor";
import { init3DHelperGrid } from "./src/GridHelper";
import {
	handleKeyboardMovementInput,
	handleOtherKeyBoardInput,
	initKeyboard,
} from "./src/KeyboardInput";
import { initResizeListener } from "./src/Resize";

import "./src/CSS/debugwindow.css";
import "./src/CSS/main.css";
import "./src/CSS/menu.css";
import { initSettings } from "./src/Settings";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const body = document.body;

init3DHelperGrid(scene);
const floor = initFloor();
const floorColision = addFloorColision();
const controls = initControls(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube, floor);

camera.position.z = 5;
camera.position.y = 1;

function animate() {
	requestAnimationFrame(animate);
	handleKeyboardMovementInput(controls, floorColision);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	updateDebugWindow(camera.position);

	renderer.render(scene, camera);
}

initResizeListener(camera, renderer);
initKeyboard();
handleOtherKeyBoardInput();
animate();
initSettings(body);
