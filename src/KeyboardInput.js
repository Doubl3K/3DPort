import { Vector3 } from "three";
import {
	closeDebugWindow,
	initDebugWindow,
	openDebugWindow,
} from "./DebuggWindow";

let MOVE_SPEED = 1;

let keyboard = {};
let cameraPosition = new Vector3(0, 0, 0);
let cameraRotation = new Vector3(0, 0, 0);

/**
 * Initializes the Keyboard by attaching eventListener for keydown and keyup.
 * If a button is pressed it will be added to the keyboard object with a true value.
 * When the button is release a false value is written.
 */
export function initKeyboard() {
	window.addEventListener("keydown", function (event) {
		keyboard[event.key.toLowerCase()] = true;
	});
	window.addEventListener("keyup", function (event) {
		keyboard[event.key.toLowerCase()] = false;
	});
}

/**
 * Moves the camera depending on the button pressed
 * To change the movement speed increase or decrease the
 * MOVE_SPEED at the beginning of the file
 *
 * @param camera The object being moved by the inputs
 * @param delta The delta time between keyinputs
 */
export function handleKeyboardMovementInput(camera) {
	if (keyboard["w"]) {
		cameraPosition.z -= MOVE_SPEED;
	}
	if (keyboard["s"]) {
		cameraPosition.z += MOVE_SPEED;
	}
	if (keyboard["a"]) {
		cameraPosition.x -= MOVE_SPEED;
	}
	if (keyboard["d"]) {
		cameraPosition.x += MOVE_SPEED;
	}
	if (keyboard["c"]) {
		cameraPosition.y -= MOVE_SPEED;
	}
	if (keyboard[" "]) {
		cameraPosition.y += MOVE_SPEED;
	}
	camera.position.copy(cameraPosition);
	camera.rotation.setFromVector3(cameraRotation);
}

/* This one has it's own function to minimize performance usage
Since the movement key get checked on every frame
other inputs will get a normal event listener */
/**
 *
 */
export function handleOtherKeyBoardInput() {
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

			console.log(event.key);
		}
	});
}
