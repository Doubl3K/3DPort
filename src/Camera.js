import { PerspectiveCamera } from "three";

/**
 * Initializes the camera
 * @returns {PerspectiveCamera} The new initialized camera
 */

export default function initCamera() {
	const camera = new PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	return camera;
}
