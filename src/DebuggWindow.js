let debugWindowWrapper = undefined;

export function initDebugWindow() {
	debugWindowWrapper = document.createElement("div");
	debugWindowWrapper.classList.add("debugWindowWrapper");

	let debugText = document.createElement("p");
	debugText.classList.add("debugText");
	debugText.innerHTML = "This is a window";

	debugWindowWrapper.appendChild(debugText);
	document.getElementsByTagName("body")[0].appendChild(debugWindowWrapper);
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
