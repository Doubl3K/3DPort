let debugWindowWrapper = undefined;
let camData = undefined;

/**
 * Initializes the debug window
 */
export function initDebugWindow() {
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
	document.getElementsByTagName("body")[0].append(debugWindowWrapper);
}

/**
 * Opens the debug window
 * This will probably, hopefully, be removed in the future
 */
export function openDebugWindow() {
	debugWindowWrapper.classList.add("active");

	//Used to tell if the debug window is open
	return true;
}

/**
 * Closes the debug window
 * This will probably, hopefully, be removed in the future
 */
export function closeDebugWindow() {
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
		cameraPosition.x +
		" Y: " +
		cameraPosition.y +
		" Z: " +
		cameraPosition.z;
}
