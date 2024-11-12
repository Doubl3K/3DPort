/**
 * Resize the renderer and camera when the window is resized
 * @param {PerspectiveCamera} camera The camera in the scene to change the aspect ratio
 * @param {WebGLRenderer} renderer The renderer to change the size of the canvas
 */
export function initResizeListener(camera, renderer) {
	window.addEventListener("resize", function () {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	});
}
