import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

export function loadModel(modelPath, scene) {
	loader.load(
		modelPath,
		function (gltf) {
			scene.add(gltf.scene);
		},
		undefined,
		function (error) {
			console.error(error);
		}
	);
}
