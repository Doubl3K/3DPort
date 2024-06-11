import { PointerLockControls } from "three/examples/jsm/Addons.js";
import audio from "../assets/sounds/heartboundost.mp3";
import { keyboardEnableSwitch } from "./KeyboardInput";

let MOUSE_SPEED = 1;
let controls;

export function initControls(camera) {
	controls = new PointerLockControls(camera, document.body);
	controls.pointerSpeed = MOUSE_SPEED;

	const startButton = document.getElementsByClassName("start")[0];
	const menu = document.getElementsByClassName("mainMenu")[0];
	const bgm = new Audio(audio);
	bgm.volume = 0.05;
	bgm.loop = true;

	let crosshairBuilt = false;
	let crosshair;
	startButton.addEventListener(
		"click",
		function () {
			if (!crosshairBuilt) {
				crosshair = buildCrosshair();
				crosshairBuilt = true;
			}
			controls.lock();
		},
		false
	);

	controls.addEventListener("lock", () => {
		menu.classList.add("hidden");
		crosshair.classList.remove("hidden");
		keyboardEnableSwitch();
		bgm.play();
	});
	controls.addEventListener("unlock", () => {
		menu.classList.remove("hidden");
		crosshair.classList.add("hidden");
		keyboardEnableSwitch();
		bgm.pause();
	});

	return controls;
}

function buildCrosshair() {
	const crosshairWrapper = document.createElement("div");
	const crosshair = document.createElement("img");

	crosshairWrapper.classList.add("crosshairWrapper");
	crosshair.classList.add("crosshair");

	crosshair.src = "./Assets/crosshair.svg";
	crosshairWrapper.appendChild(crosshair);
	document.body.appendChild(crosshairWrapper);
	return crosshairWrapper;
}

export function getMouseSpeed() {
	return controls.pointerSpeed;
}

export function setMouseSpeed(speed) {
	controls.pointerSpeed = speed;
	MOUSE_SPEED = speed;
}
