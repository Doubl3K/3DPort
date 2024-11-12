import "../../css/questWindow.css"

let questWindow
export function initQuestWindow() {
	questWindow = document.createElement("div")
	questWindow.className = "questWindow"
	document.body.appendChild(questWindow)
}

function show() {
	questWindow.style.display = "block"
}

function hide() {
	questWindow.style.display = "none"
}

export function addQuest(questText) {
	const questWrapper = buildQuestToAdd(questText)
	questWindow.appendChild(questWrapper)
}

function finishQuest(quest) {
	tickQuest(quest)
	crossOutQuest(quest)
	quest.classList.remove("blinking")
	console.log(quest.classList)
	setTimeout(() => {
		quest.classList.add("blinking")
		console.log(quest.classList)
	}, 10)
}

function tickQuest(quest) {
	quest.children[0].innerHTML = "☑"
}

function crossOutQuest(quest) {
	quest.children[1].classList.add("none")
}
export class QuestWindow {
	tickQuest(quest) {
		quest.children[0].innerHTML = "☑"
	}

	crossOutQuest(quest) {
		quest.children[1].classList.add("done")
	}
}

function buildQuestToAdd(questText) {
	let questWrapper = document.createElement("div")
	questWrapper.className = "questWrapper"

	let questCheckbox = document.createElement("span")
	questCheckbox.className = "questCheckbox"
	questCheckbox.innerHTML = "☐"
	questWrapper.appendChild(questCheckbox)

	let questTextWrapper = document.createElement("span")
	questTextWrapper.className = "questText"
	questTextWrapper.appendChild(document.createTextNode(questText))
	questWrapper.appendChild(questTextWrapper)

	questWrapper.classList.add("blinking")

	return questWrapper
}
