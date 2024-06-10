import { BoxGeometry, MathUtils, Mesh, MeshBasicMaterial } from "three";
let cubeArr = [];
//Change to spawn more cubes
const CUBE_COUNT = 10;

/**
 * Initializes cubes for testing purposes
 * @param {THREE.Scene} scene Scene to add cubes to
 */
export function initCubes(scene) {
	const geometry = new BoxGeometry(1, 1, 1);
	const material = new MeshBasicMaterial({ color: 0x00ff00 });
	const cube = new Mesh(geometry, material);
	const cubeArr = moreCubes(cube);
	addCubesToScene(scene, cubeArr);
	return cubeArr;
}

/**
 * Rotates cubes randomly
 * @param {Array<THREE.Mesh>} cubes Array of cubes to rotate
 */
export function rotateCubes(cubes) {
	cubes.forEach((cube) => {
		cube.rotation.x += Math.random() * 0.1;
		cube.rotation.y += Math.random() * 0.1;
	});
}

/**
 * Spawns more cubes in loop
 * @param {THREE.Mesh} cube Cube to clone
 */
function moreCubes(cube) {
	for (let index = 0; index < CUBE_COUNT; index++) {
		const newCube = cube.clone();
		newCube.position.x = MathUtils.randFloatSpread(10);
		newCube.position.y = MathUtils.randFloatSpread(10) + 10;
		newCube.position.z = MathUtils.randFloatSpread(10);
		cubeArr.push(newCube);
	}
	return cubeArr;
}

/**
 * Adds cubes to scene
 * @param {THREE.Scene} scene Scene to add cubes to
 * @param {Array<THREE.Mesh>} cubes Cubes to add to scene
 */
function addCubesToScene(scene, cubes) {
	cubes.forEach((cube) => {
		scene.add(cube);
	});
}
