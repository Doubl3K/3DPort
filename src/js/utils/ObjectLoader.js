import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"
import { OBJLoader } from "three/examples/jsm/Addons.js"

const gltfLoader = new GLTFLoader()
const objLoader = new OBJLoader()

/**
 * Loads a GLTF Model from file.
 * To add the Model to the scene use scene.add(model.scene)
 *
 * @param {string} modelPath The directory path for the model to load
 * @returns Promise: GLTF Scene group model
 */
export function loadGLTFModel(modelPath) {
	return new Promise((resolve, reject) => {
		gltfLoader.load(modelPath, (gltf) => {
			resolve(gltf)
		}),
			//can be used for loading progress
			undefined,
			(error) => {
				console.error("Could not load GLTF File: " + modelPath)
				reject(error)
			}
	})
}

/**
 * Loads a OBJ Model from file.
 * To add the Model to the scene use scene.add(model)
 *
 * @param {String} modelPath The directory path for the model to load
 * @returns Promise: OBJ group model
 */
export function loadOBJModel(modelPath) {
	return new Promise((resolve, reject) => {
		objLoader.load(modelPath, (obj) => {
			resolve(obj)
		}),
			// can be used for ladoing progress
			undefined,
			(error) => {
				console.error("Could not load OBJ File: " + modelPath)
				reject(error)
			}
	})
}
