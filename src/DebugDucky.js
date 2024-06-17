import { loadModel } from "./ObjectLoader";
export function addDucky(scene) {
	const ducky = loadModel("assets/models/ducky.gltf", scene);
}
