import { loadGLTFModel } from "../utils/ObjectLoader"

export function addDucky(scene) {
	loadGLTFModel("assets/models/ducky.gltf").then((model) => {
		scene.add(model.scene)
	})
}
