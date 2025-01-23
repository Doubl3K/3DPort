import Stats from "stats.js"
import * as THREE from "three"

import initCamera from "./src/js/components/Camera"
import { initCubes, rotateCubes } from "./src/js/components/Cubes"
import { addDucky } from "./src/js/components/DebugDucky"
import { updateDebugWindow } from "./src/js/components/DebuggWindow"
import { initInterior } from "./src/js/components/Interior"
import { addHoverSoundToButtons } from "./src/js/components/Menu"
import { initScene } from "./src/js/components/Scene"
import { initSettings } from "./src/js/components/Settings"
import { initMainMenuTooltip } from "./src/js/components/Tooltip"
import { handleCollision } from "./src/js/utils/CollisionDetection"
import { initControls } from "./src/js/utils/Controls"
import {
	handleKeyboardMovementInput,
	handleOtherKeyBoardInput,
	initKeyboard,
} from "./src/js/utils/KeyboardInput"
import { initResizeListener } from "./src/js/utils/Resize"

import "./src/css/controls.css"
import "./src/css/crosshair.css"
import "./src/css/debugwindow.css"
import "./src/css/main.css"
import "./src/css/menu.css"
import "./src/css/tooltip.css"
import { addNpc } from "./src/js/components/models/Npc"

const scene = initScene()
const camera = initCamera()
const body = document.body
const cubes = initCubes(scene)
const color = 0xffffff
const intensity = 10
const light = new THREE.AmbientLight(color, intensity)
const stats = new Stats()
body.appendChild(stats.dom)
scene.add(light)

// const floorColision = addFloorColision();
const controls = initControls(camera)
initInterior(scene)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 5
camera.position.y = 1

function animate() {
	stats.begin()
	handleKeyboardMovementInput(controls)
	rotateCubes(cubes)
	updateDebugWindow(camera.position)
	handleCollision()
	renderer.render(scene, camera)
	stats.end()
	requestAnimationFrame(animate)
}

initMainMenuTooltip(body)
initResizeListener(camera, renderer)
initKeyboard()
handleOtherKeyBoardInput(controls)
initSettings(body)
addHoverSoundToButtons()
addDucky(scene)
addNpc(scene)
animate()
// initQuestSystem()
