import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

export function initFloor() {
	const geometry = new PlaneGeometry(100, 100);
	const material = new MeshBasicMaterial({
		color: "#3D2211",
		side: DoubleSide,
	});
	const plane = new Mesh(geometry, material);

	plane.rotateX(1.5708); //90.0002105 deg
	console.log(plane);
	return plane;
}
