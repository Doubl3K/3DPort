import { PerspectiveCamera } from "three";

export default function initCamera() {
	const camera = new PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	return camera;
}
