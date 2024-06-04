import { PointerLockControls } from "three/examples/jsm/Addons.js";

export function initControls(camera) {
	const controls = new PointerLockControls(camera, document.body);

	const startButton = document.getElementsByClassName("start")[0];
	const menu = document.getElementsByClassName("mainMenu")[0];
	startButton.addEventListener(
		"click",
		function () {
			controls.lock();
		},
		false
	);

	controls.addEventListener("lock", () => {
		menu.classList.add("hidden");
		console.log("controls locked");
	});
	controls.addEventListener("unlock", () => {
		menu.classList.remove("hidden");
		console.log("controls unlocked");
	});

	return controls;
}
