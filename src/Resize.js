export function initResizeListener(camera, renderer) {
	window.addEventListener("resize", function () {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	});
}
