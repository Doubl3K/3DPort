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
	mouseWrapper.append(mouseSensitivityLabel, mouseSensitivityInput);

	// Movement speed
	const movementWrapper = document.createElement("div");
	movementWrapper.classList.add("movementWrapper");

	const movementSpeedLabel = document.createElement("label");
	movementSpeedLabel.innerHTML = "Movement Speed";

	const movementSpeedInput = document.createElement("input");
	movementSpeedInput.type = "range";
	movementSpeedInput.min = "0";
	movementSpeedInput.max = "10";

	movementWrapper.append(movementSpeedLabel, movementSpeedInput);

	settingsWindow.append(settingsLabel, mouseWrapper, movementWrapper);
	settingsWindowWrapper.appendChild(settingsWindow);
	body.appendChild(settingsWindowWrapper);
}
