import hoverS from "../../../assets/sounds/cursorSound.mp3"

const hoverSound = new Audio(hoverS)
hoverSound.volume = 0.2

export function addHoverSoundToButtons() {
	const buttons = document.getElementsByClassName("mainMenuButton")
	for (const button of buttons) {
		button.addEventListener("mouseenter", playButtonHoverSound)
	}
}

function playButtonHoverSound() {
	play()
	async function play() {
		await hoverSound.play()
	}
	console.log("play")
}
