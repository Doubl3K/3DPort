import { Vector3 } from "three";
import { initCLI } from "./CommandLine";
import {
	closeDebugWindow,
	initDebugWindow,
	openDebugWindow,
} from "./DebuggWindow";

import audio from "../assets/sounds/walkingOnWood.mp3";

let MOVE_SPEED = 0.1;

let keyboard = {};
let keyboardEnabled = false;
let cameraPosition = new Vector3(0, 0, 0);
let cameraRotation = new Vector3(0, 0, 0);

const walkingSound = new Audio(audio);
let cliWrapper = null;

/**
 * Initializes the Keyboard by attaching eventListener for keydown and keyup.
 * If a button is pressed it will be added to the keyboard object with a true value.
 * When the button is release a false value is written.
 */
export function initKeyboard() {
	window.addEventListener("keydown", keydownHandler);
	window.addEventListener("keyup", keyupHandler);
}

function keydownHandler(event) {
	keyboard[event.key.toLowerCase()] = true;
}

function keyupHandler(event) {
	keyboard[event.key.toLowerCase()] = false;
}

/**
 * Moves the camera depending on the button pressed
 * To change the movement speed increase or decrease the
 * MOVE_SPEED at the beginning of the file
 *
 * @param camera The object being moved by the inputs
 * @param delta The delta time between keyinputs
 */
export function handleKeyboardMovementInput(controls, floorCollision) {
	if (keyboard["w"]) {
		controls.moveForward(MOVE_SPEED);
	}
	if (keyboard["s"]) {
		controls.moveForward(-MOVE_SPEED);
	}
	if (keyboard["a"]) {
		controls.moveRight(-MOVE_SPEED);
	}
	if (keyboard["d"]) {
		controls.moveRight(MOVE_SPEED);
	}
	if (keyboard["c"]) {
	}
	if (keyboard[" "]) {
	}
	handleWalkingSound();
}

/* This one has it's own function to minimize performance usage
Since the movement key get checked on every frame
other inputs will get a normal event listener */
/**
 *
 */
export function handleOtherKeyBoardInput(controls) {
	//probably should have used some way of state management
	let initDebugBoolean = false;
	let debugWindowOpen = false;
	document.addEventListener("keypress", (event) => {
		//Belive it or not, this is Ctrl + Q
		if (event.key === "\x11") {
			if (initDebugBoolean === false) {
				initDebugWindow();
				debugWindowOpen = openDebugWindow();
				initDebugBoolean = true;
			} else {
				if (!debugWindowOpen) {
					debugWindowOpen = openDebugWindow();
				} else {
					debugWindowOpen = closeDebugWindow();
				}
			}
		}

		if (event.key === "T") {
			event.stopPropagation();
			if (!cliWrapper) {
				cliWrapper = initCLI(document.body, controls);
			} else {
				cliWrapper.classList.toggle("hidden");
			}
			event.preventDefault();
			cliWrapper.querySelector(".cliInput").focus();
			controls.disconnect();
			keyboardEnableSwitch();
		}
	});
}

/**
 * Handles the walking sound by checking if the player is moving
 * If the player is moving the sound will play, if not it will pause
 * and reset the audio time to a random value
 */
function handleWalkingSound() {
	if (keyboard["w"] || keyboard["a"] || keyboard["s"] || keyboard["d"]) {
		walkingSound.loop = true;
		walkingSound.play();
	} else {
		walkingSound.pause();
		walkingSound.currentTime = Math.random() * 10;
	}
}

export function keyboardEnableSwitch() {
	if (!keyboardEnabled) {
		window.addEventListener("keydown", keydownHandler);
		window.addEventListener("keyup", keyupHandler);
		keyboardEnabled = true;
	} else {
		window.removeEventListener("keydown", keydownHandler);
		window.removeEventListener("keyup", keyupHandler);
		keyboardEnabled = false;
	}
}
