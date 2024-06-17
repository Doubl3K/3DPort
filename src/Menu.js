export function addHoverSoundToButtons() {
	const buttons = document.getElementsByClassName("mainMenuButton");
	for (const button of buttons) {
		button.addEventListener("mouseenter", playButtonHoverSound);
	}
}

function playButtonHoverSound() {
	play();
	async function play() {
		const hoverSound = new Audio("../assets/sounds/cursorSound.mp3");
		await hoverSound.play();
	}
	console.log("play");
}
