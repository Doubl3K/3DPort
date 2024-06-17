import * as THREE from "three";

import initCamera from "./src/Camera";
import { initControls } from "./src/Controls";
import { initCubes, rotateCubes } from "./src/Cubes";
import { updateDebugWindow } from "./src/DebuggWindow";
import { init3DHelperGrid } from "./src/GridHelper";
import { initInterior } from "./src/Interior";
import {
	handleKeyboardMovementInput,
	handleOtherKeyBoardInput,
	initKeyboard,
} from "./src/KeyboardInput";
import { addHoverSoundToButtons } from "./src/Menu";
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
const cubes = initCubes(scene);
const color = 0xffffff;
const intensity = 10;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

init3DHelperGrid(scene);
// const floorColision = addFloorColision();
const controls = initControls(camera);
initInterior(scene);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.y = 1;

function animate() {
	requestAnimationFrame(animate);
	handleKeyboardMovementInput(controls);
	rotateCubes(cubes);
	updateDebugWindow(camera.position);
	renderer.render(scene, camera);
}

initMainMenuTooltip(body);
initResizeListener(camera, renderer);
initKeyboard();
handleOtherKeyBoardInput(controls);
initSettings(body);
addHoverSoundToButtons();
animate();
