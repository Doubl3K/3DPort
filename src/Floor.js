import {
	Box3,
	DoubleSide,
	Mesh,
	MeshBasicMaterial,
	PlaneGeometry,
	Vector3,
} from "three";

let plane = undefined;

export function initPlane(rotation) {
	const geometry = new PlaneGeometry(100, 100);
	const material = new MeshBasicMaterial({
		color: "#3D2211",
		side: DoubleSide,
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
