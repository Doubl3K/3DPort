import { Color, GridHelper } from "three";

const SIZE = 100;
const DIVISIONS = 10;

/**
 * Adds a threedimensional Grid to the scene to make placement easier
 * @param scene The THREE.scene that the Grid should be added to
 */
export function init3DHelperGrid(scene) {
	const gridXZ = new GridHelper(
		SIZE,
		DIVISIONS,
		new Color(0x006600),
		new Color(0x006600)
	);
	gridXZ.rotation.x = Math.PI / 2;
	scene.add(gridXZ);

	const gridXY = new GridHelper(
		SIZE,
		DIVISIONS,
		new Color(0x000066),
		new Color(0x000066)
	);
	gridXY.rotation.x = Math.PI / 2;
	scene.add(gridXY);

	const gridYZ = new GridHelper(
		SIZE,
		DIVISIONS,
		new Color(0x660000),
		new Color(0x660000)
	);
	gridXY.rotation.z = Math.PI / 2;
	scene.add(gridYZ);
}
