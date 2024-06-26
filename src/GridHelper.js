import { Color, GridHelper } from "three";

const SIZE = 100;
const DIVISIONS = 10;
let gridXZ;
let gridXY;
let gridYZ;

/**
 * Adds a threedimensional Grid to the scene to make placement easier
 * @param scene The THREE.scene that the Grid should be added to
 */
export function init3DHelperGrid(scene) {
	gridXZ = new GridHelper(
		SIZE,
		DIVISIONS,
		new Color(0x006600),
		new Color(0x006600)
	);
	gridXZ.rotation.x = Math.PI / 2;
	scene.add(gridXZ);

	gridXY = new GridHelper(
		SIZE,
		DIVISIONS,
		new Color(0x000066),
		new Color(0x000066)
	);
	gridXY.rotation.x = Math.PI / 2;
	scene.add(gridXY);

	gridYZ = new GridHelper(
		SIZE,
		DIVISIONS,
		new Color(0x660000),
		new Color(0x660000)
	);
	gridXY.rotation.z = Math.PI / 2;
	scene.add(gridYZ);
}

/**
 * Removes the threedimensional Grid from the scene
 * @param scene The THREE.scene that the Grid should be removed from
 */
export function add3DHelperGrid(scene) {
	scene.add(gridXZ);
	scene.add(gridXY);
	scene.add(gridYZ);
}

/**
 * Removes the threedimensional Grid from the scene
 * @param scene The THREE.scene that the Grid should be removed from
 */
export function remove3DHelperGrid(scene) {
	scene.remove(gridXZ);
	scene.remove(gridXY);
	scene.remove(gridYZ);
}
