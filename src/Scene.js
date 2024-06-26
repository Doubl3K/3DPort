import { Scene } from "three";
let scene;

/**
 * Initializes the scene
 * @returns {Scene} The initialized scene
 */
export function initScene() {
	scene = new Scene();
	return scene;
}

/**
 * Returns the current scene
 * @returns {Scene} The current scene
 */
export function getScene() {
	return scene;
}

/**
 * Sets the current scene
 * @param {Scene} scene The new scene
 */
export function setScene(newScene) {
	scene = newScene;
}
