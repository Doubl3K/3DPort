import { TextureLoader } from "three";
import { initCollision } from "./CollisionDetection";
import { initPlane } from "./Floor";

const texture = new TextureLoader().load("../assets/woodPanel.jpg");

/**
 * Export to initialize the interior of the room
 * @param {Scene} scene The scene to add the interior to
 */
export function initInterior(scene) {
	const floorAndWalls = initFloorAndWalls(scene);
}

/**
 * Initializes the floor and walls of the room
 * @param {Scene} scene The scene to add the floor and walls to
 */
function initFloorAndWalls(scene) {
	const floor = initPlane(1.5708);
	const northWall = initPlane(0);
	const eastWall = initPlane(0);
	const southWall = initPlane(0);
	const westWall = initPlane(0);

	floor.position.y = 0;

	northWall.position.z = -50;
	northWall.position.y = 50;
	northWall.position.x = 0;

	eastWall.position.x = 50;
	eastWall.position.y = 50;
	eastWall.position.z = 0;
	eastWall.rotateY(1.5708);

	southWall.position.z = 50;
	southWall.position.y = 50;
	southWall.position.x = 0;

	westWall.position.x = -50;
	westWall.position.y = 50;
	westWall.position.z = 0;
	westWall.rotateY(1.5708);

	const collisionArray = [floor, northWall, eastWall, southWall, westWall];
	initCollision(collisionArray);

	scene.add(floor, northWall, eastWall, southWall, westWall);
}
