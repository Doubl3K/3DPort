import { addQuest, initQuestWindow } from "../components/QuestWindow"

export function initQuestSystem() {
	let questWindow = initQuestWindow()
	addQuest("this")
}
