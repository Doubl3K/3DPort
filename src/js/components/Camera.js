import { PerspectiveCamera } from "three";

let camera;
/**
 * Initializes the camera
 * @returns {PerspectiveCamera} The new initialized camera
 */

export default function initCamera() {
	camera = new PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	return camera;
}

export function getCamera() {
	return camera;
}

export function setCamera(newCamera) {
	camera = newCamera;
}
