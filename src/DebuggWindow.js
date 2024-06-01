let debugWindowWrapper = undefined;
let camData = undefined;

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

export function openDebugWindow() {
	debugWindowWrapper.classList.add("active");

	//Used to tell if the debug window is open
	return true;
}

export function closeDebugWindow() {
	debugWindowWrapper.classList.remove("active");

	//Used to tell if the debug window is open
	return false;
}

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
