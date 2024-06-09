import {
	DoubleSide,
	LinearFilter,
	MeshBasicMaterial,
	RepeatWrapping,
	TextureLoader,
} from "three";
import { initPlane } from "./Floor";

const texture = new TextureLoader().load("../assets/woodPanel.jpg");

export function initInterior(scene) {
	const floorAndWalls = initFloorAndWalls(scene);
}

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
	addWoodTexture(northWall);

	eastWall.position.x = 50;
	eastWall.position.y = 50;
	eastWall.position.z = 0;
	eastWall.rotateY(1.5708);
	addWoodTexture(eastWall);

	southWall.position.z = 50;
	southWall.position.y = 50;
	southWall.position.x = 0;
	addWoodTexture(southWall);

	westWall.position.x = -50;
	westWall.position.y = 50;
	westWall.position.z = 0;
	westWall.rotateY(1.5708);
	addWoodTexture(westWall);

	scene.add(floor, northWall, eastWall, southWall, westWall);
}

function addWoodTexture(object) {
	const material = new MeshBasicMaterial({
		map: texture,
		side: DoubleSide,
	});

	texture.wrapS = RepeatWrapping;
	texture.wrapT = RepeatWrapping;
	texture.repeat.set(10, 10);
	texture.minFilter = LinearFilter;
	texture.magFilter = LinearFilter;

	object.material = material;
}
