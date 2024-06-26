import { Scene } from "three";

/**
 * Initializes the scene
 * @returns {Scene} The initialized scene
 */
export function initScene() {
	return new Scene();
}

/**
 * Returns the current scene
 * @returns {Scene} The current scene
 */
export function getScene() {
	return Scene;
}

/**
 * Sets the current scene
 * @param {Scene} scene The new scene
 */
export function setScene(scene) {
	Scene = scene;
}
