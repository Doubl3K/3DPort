import {
	Box3,
	DoubleSide,
	LinearFilter,
	Mesh,
	MeshStandardMaterial,
	PlaneGeometry,
	RepeatWrapping,
	TextureLoader,
	Vector3,
} from "three";

let plane = undefined;
const texture = new TextureLoader().load("../assets/woodPanel.jpg");
const normalMap = new TextureLoader().load("../assets/normalMap.jpg");
texture.wrapS = RepeatWrapping;
texture.wrapT = RepeatWrapping;
texture.repeat.set(10, 10);
texture.minFilter = LinearFilter;
texture.magFilter = LinearFilter;

normalMap.wrapS = RepeatWrapping;
normalMap.wrapT = RepeatWrapping;
normalMap.repeat.set(10, 10);
normalMap.minFilter = LinearFilter;
normalMap.magFilter = LinearFilter;

export function initPlane(rotation) {
	const geometry = new PlaneGeometry(100, 100);
	const material = new MeshStandardMaterial({
		color: "#3D2211",
		side: DoubleSide,
		map: texture,
		normalMap: normalMap,
	});
	plane = new Mesh(geometry, material);

	plane.rotateX(rotation);
	return plane;
}

export function addFloorColision() {
	const planeBB = new Box3(new Vector3(), new Vector3());
	planeBB.setFromObject(plane);
	return planeBB;
}
