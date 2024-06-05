import { PointerLockControls } from "three/examples/jsm/Addons.js";

export function initControls(camera) {
	const controls = new PointerLockControls(camera, document.body);

	const startButton = document.getElementsByClassName("start")[0];
	const menu = document.getElementsByClassName("mainMenu")[0];

	let crosshairBuilt = false;
	let crosshair;
	startButton.addEventListener(
		"click",
		function () {
			if (!crosshairBuilt) {
				crosshair = buildCrosshair();
				crosshairBuilt = true;
			}
			controls.lock();
		},
		false
	);

	controls.addEventListener("lock", () => {
		menu.classList.add("hidden");
		crosshair.classList.remove("hidden");
		console.log("controls locked");
	});
	controls.addEventListener("unlock", () => {
		menu.classList.remove("hidden");
		crosshair.classList.add("hidden");
		console.log("controls unlocked");
	});

	return controls;
}

function buildCrosshair() {
	const crosshairWrapper = document.createElement("div");
	const crosshair = document.createElement("img");

	crosshairWrapper.classList.add("crosshairWrapper");
	crosshair.classList.add("crosshair");

	crosshair.src = "./Assets/crosshair.svg";
	crosshairWrapper.appendChild(crosshair);
	document.body.appendChild(crosshairWrapper);
	return crosshairWrapper;
}
