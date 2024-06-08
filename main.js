import * as THREE from "three";

import initCamera from "./src/Camera";
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
import { initSettings } from "./src/Settings";
import { initMainMenuTooltip } from "./src/Tooltip";

import "./src/CSS/controls.css";
import "./src/CSS/crosshair.css";
import "./src/CSS/debugwindow.css";
import "./src/CSS/main.css";
import "./src/CSS/menu.css";
import "./src/CSS/tooltip.css";

const scene = new THREE.Scene();
const camera = initCamera();
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
let cubeArr = [];

for (let index = 0; index < 100; index++) {
	const newCube = cube.clone();
	newCube.position.x = Math.floor(Math.random() * 30) - 5;
	newCube.position.y = Math.floor(Math.random() * 10) + 1;
	newCube.position.z = Math.floor(Math.random() * 30) + 1;
	cubeArr.push(newCube);
	scene.add(newCube);
}

camera.position.z = 5;
camera.position.y = 1;

function animate() {
	requestAnimationFrame(animate);
	handleKeyboardMovementInput(controls, floorColision);
	cubeArr.forEach((cube) => {
		cube.rotation.x += Math.random() * 0.1;
		cube.rotation.y += Math.random() * 0.1;
	});
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	updateDebugWindow(camera.position);

	renderer.render(scene, camera);
}

initMainMenuTooltip(body);
initResizeListener(camera, renderer);
initKeyboard();
handleOtherKeyBoardInput();
initSettings(body);
animate();
