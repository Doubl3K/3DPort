import { getMouseSpeed, setMouseSpeed } from "./Controls";
import { getMoveSpeed, setMoveSpeed } from "./KeyboardInput";

export function initSettings(body) {
	document
		.getElementsByClassName("settings")[0]
		.addEventListener("click", () => {
			buildSettingsWindow(body);
		});
}

function buildSettingsWindow(body) {
	const settingsWindowWrapper = document.createElement("div");
	settingsWindowWrapper.classList.add("settingsWindowWrapper");

	const settingsWindow = document.createElement("div");
	settingsWindow.classList.add("settingsWindow");

	const settingsLabel = document.createElement("label");
	settingsLabel.innerHTML = "Settings";

	// Mouse Sensitivity
	const mouseWrapper = document.createElement("div");
	mouseWrapper.classList.add("mouseWrapper");

	const mouseSensitivityLabel = document.createElement("label");
	mouseSensitivityLabel.innerHTML = "Mouse Sensitivity";

	const mouseSensitivityInput = document.createElement("input");
	mouseSensitivityInput.type = "range";
	mouseSensitivityInput.min = "0";
	mouseSensitivityInput.max = "10";
	mouseSensitivityInput.value = getMouseSpeed();
	mouseSensitivityInput.id = "lookSpeedInput";

	const mouseSensitivityInputValue = document.createElement("span");
	mouseSensitivityInputValue.innerHTML = mouseSensitivityInput.value;
	mouseSensitivityInputValue.classList.add("mouseSensitivityInputValue");

	mouseWrapper.append(
		mouseSensitivityLabel,
		mouseSensitivityInput,
		mouseSensitivityInputValue
	);

	// Movement speed
	const movementWrapper = document.createElement("div");
	movementWrapper.classList.add("movementWrapper");

	const movementSpeedLabel = document.createElement("label");
	movementSpeedLabel.innerHTML = "Movement Speed";

	const movementSpeedInput = document.createElement("input");

	movementSpeedInput.type = "range";
	movementSpeedInput.min = "0.1";
	movementSpeedInput.max = "10";
	movementSpeedInput.value = getMoveSpeed();
	movementSpeedInput.id = "movementSpeedInput";

	const movementSpeedInputValue = document.createElement("span");
	movementSpeedInputValue.innerHTML = movementSpeedInput.value;
	movementSpeedInputValue.classList.add("movementSpeedInputValue");

	movementWrapper.append(
		movementSpeedLabel,
		movementSpeedInput,
		movementSpeedInputValue
	);

	settingsWindow.append(settingsLabel, mouseWrapper, movementWrapper);
	settingsWindowWrapper.appendChild(settingsWindow);
	body.appendChild(settingsWindowWrapper);
	settingsWindowCloser();
	moveSpeedChangeListener();
	dontCloseSettingsInWindow();
	lookSpeedChangeListener();
}

function settingsWindowCloser() {
	let settingsWrapper = document.getElementsByClassName(
		"settingsWindowWrapper"
	)[0];
	settingsWrapper.addEventListener("click", () => {
		settingsWrapper.remove();
	});
}

function moveSpeedChangeListener() {
	const movementSpeedInput = document.querySelector("#movementSpeedInput");
	movementSpeedInput.addEventListener("input", () => {
		setMoveSpeed(movementSpeedInput.value);
		updateMovementValue();
	});
}

function lookSpeedChangeListener() {
	const lookSpeedInput = document.querySelector("#lookSpeedInput");
	lookSpeedInput.addEventListener("input", () => {
		setMouseSpeed(lookSpeedInput.value / 10);
		updateMouseSpeedValue();
	});
}

function dontCloseSettingsInWindow() {
	const settingsWindow = document.getElementsByClassName("settingsWindow")[0];
	settingsWindow.addEventListener("click", (event) => {
		event.stopPropagation();
	});
}

function updateMouseSpeedValue() {
	const mouseSensitivityInput = document.querySelector("#lookSpeedInput");
	const mouseSensitivityInputValue = document.querySelector(
		".mouseSensitivityInputValue"
	);
	mouseSensitivityInputValue.innerHTML = mouseSensitivityInput.value;
}

function updateMovementValue() {
	const movementSpeedInput = document.querySelector("#movementSpeedInput");
	const movementSpeedInputValue = document.querySelector(
		".movementSpeedInputValue"
	);
	movementSpeedInputValue.innerHTML = movementSpeedInput.value;
}
