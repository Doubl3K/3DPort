import * as THREE from "three";

import Stats from "stats.js";
import initCamera from "./src/Camera";
import { handleCollision } from "./src/CollisionDetection";
import { initControls } from "./src/Controls";
import { initCubes, rotateCubes } from "./src/Cubes";
import { addDucky } from "./src/DebugDucky";
import { updateDebugWindow } from "./src/DebuggWindow";
import { initInterior } from "./src/Interior";
import {
	handleKeyboardMovementInput,
	handleOtherKeyBoardInput,
	initKeyboard,
} from "./src/KeyboardInput";
import { addHoverSoundToButtons } from "./src/Menu";
import { initResizeListener } from "./src/Resize";
import { initScene } from "./src/Scene";
import { initSettings } from "./src/Settings";
import { initMainMenuTooltip } from "./src/Tooltip";

import "./src/CSS/controls.css";
import "./src/CSS/crosshair.css";
import "./src/CSS/debugwindow.css";
import "./src/CSS/main.css";
import "./src/CSS/menu.css";
import "./src/CSS/tooltip.css";

const scene = initScene();
const camera = initCamera();
const body = document.body;
const cubes = initCubes(scene);
const color = 0xffffff;
const intensity = 10;
const light = new THREE.AmbientLight(color, intensity);
const stats = new Stats();
body.appendChild(stats.dom);
scene.add(light);

// const floorColision = addFloorColision();
const controls = initControls(camera);
initInterior(scene);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;
camera.position.y = 1;

function animate() {
	stats.begin();
	handleKeyboardMovementInput(controls);
	rotateCubes(cubes);
	updateDebugWindow(camera.position);
	handleCollision();
	renderer.render(scene, camera);
	stats.end();
	requestAnimationFrame(animate);
}

initMainMenuTooltip(body);
initResizeListener(camera, renderer);
initKeyboard();
handleOtherKeyBoardInput(controls);
initSettings(body);
addHoverSoundToButtons();
addDucky(scene);
animate();
