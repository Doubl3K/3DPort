import { PointerLockControls } from "three/examples/jsm/Addons.js";

export function initControls(camera) {
	const controls = new PointerLockControls(camera, document.body);

	const startButton = document.getElementById("startButton");
	startButton.addEventListener(
		"click",
		function () {
			controls.lock();
		},
		false
	);

	controls.addEventListener("lock", () => {
		console.log("controls locked");
	});
	controls.addEventListener("unlock", () => {
		console.log("controls unlocked");
	});

	return controls;
}
