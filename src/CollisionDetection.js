import { Box3, Vector3 } from "three";
import { getCamera } from "./Camera";

const COLLISION_DISTANCE = 0.025;
const SAMPLE_SIZE = 2;

let colidablesArr;
let playerBB;
let playerBBSize;
let currentSample;
let playerVelocity = new Vector3(0, 0, 0);
let previousPosition = new Vector3();

/**
 * Init collision detection for array of objects with player
 * @param {Array<Object3D>} colidablesArr Array of objects to check for collision
 */
export function initCollision(collisionsArr) {
	colidablesArr = collisionsArr;
	currentSample = 0;
	addObjectCollisionBoxes(colidablesArr);
	addPlayerCollisionBox(getCamera());
}

/**
 * Adds a collision bounding box to each object in the array
 * @param {Array<Object3D>} colidablesArr Array of objects to add collision boxes to
 */
function addObjectCollisionBoxes(colidablesArr) {
	colidablesArr.forEach((colidable) => {
		const colidableBB = new Box3(new Vector3(), new Vector3());
		colidableBB.setFromObject(colidable);
		colidableBB.expandByScalar(COLLISION_DISTANCE);
		colidable.collisionBB = colidableBB;
	});
}

function addPlayerCollisionBox(player) {
	playerBB = new Box3(new Vector3(), new Vector3());
	playerBB.setFromObject(player);
	playerBB.expandByScalar(COLLISION_DISTANCE);
	playerBBSize = new Vector3(1, 1, 1);
	player.collisionBB = playerBB;
}

/**
 * Checks if the player is colliding with any objects
 * @param {Object3D} player The camera the player is controlling
 * @param {Array<Object3D>} colidablesArr Array of objects to check for collision
 */
export function handleCollision() {
	let collisionDetected = false;
	if (!checkForNFrames()) {
		return;
	}
	playerBB.setFromCenterAndSize(getCamera().position, playerBBSize);
	for (let i = 0; i < colidablesArr.length; i++) {
		if (playerBB.intersectsBox(colidablesArr[i].collisionBB)) {
			collisionDetected = checkCollision(colidablesArr[i].collisionBB);
		}
	}

	// Only update the player's position if no collision was detected
	if (!collisionDetected) {
		previousPosition.copy(getCamera().position);
		getCamera().position.add(playerVelocity);
	}

	return;
}

/**
 * Checks if the player is colliding with an object
 * @param {Box3} collisionBB The bounding box of the object to check for collision
 * @returns {boolean} True if a collision has occurred
 */
function checkCollision() {
	console.log("Collision detected");

	// Reset player position to previous position
	getCamera().position.copy(previousPosition);

	return true;
}

/**
 * Reduces ammout of frames to check for collision
 * @returns {boolean} True if frames since last is equal than SAMPLE_SIZE
 */
function checkForNFrames() {
	if (SAMPLE_SIZE === currentSample) {
		currentSample = 0;
		return true;
	}
	currentSample++;
}
