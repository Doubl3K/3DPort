import {
	add3DHelperGrid,
	init3DHelperGrid,
	remove3DHelperGrid,
} from "./GridHelper";
import { getScene } from "./Scene";

let debugWindowWrapper = undefined;
let camData = undefined;

/**
 * Initializes the debug window
 */
export function initDebugWindow() {
	init3DHelperGrid(getScene());

	debugWindowWrapper = document.createElement("div");
	debugWindowWrapper.classList.add("debugWindowWrapper");

	let debugHeadline = document.createElement("h1");
	debugHeadline.classList.add("debugHeadline");
	debugHeadline.innerHTML = "Debug information";

	let camLabel = document.createElement("label");
	camLabel.innerHTML = "Player position: ";
	camLabel.classList.add("camLabel");

	camData = document.createElement("span");

	debugWindowWrapper.append(debugHeadline, camLabel, camData);
	document.body.append(debugWindowWrapper);
}

/**
 * Opens the debug window
 * This will probably, hopefully, be removed in the future
 */
export function openDebugWindow() {
	add3DHelperGrid(getScene());
	debugWindowWrapper.classList.add("active");

	//Used to tell if the debug window is open
	return true;
}

/**
 * Closes the debug window
 * This will probably, hopefully, be removed in the future
 */
export function closeDebugWindow() {
	remove3DHelperGrid(getScene());
	debugWindowWrapper.classList.remove("active");

	//Used to tell if the debug window is open
	return false;
}

/**
 * Updates the debug window with the current camera position
 */
export function updateDebugWindow(cameraPosition) {
	//Better user perfomance since called once per frame
	if (debugWindowWrapper === undefined) {
		return;
	}

	camData.textContent =
		"X: " +
		cameraPosition.x.toFixed(2) +
		"Y: " +
		cameraPosition.y.toFixed(2) +
		"Z: " +
		cameraPosition.z.toFixed(2);
}
