import { QuestWindow } from "./QuestWindow";

export class Questsystem {
    constructor() {
        this.questWindow = new QuestWindow;
        this.questWindow.addQuest("Do the dishes");
        this.questWindow.addQuest("Kill the dragon");
        this.questWindow.addQuest("Save the princess");
        this.questWindow.addQuest("Feed the cat");
        this.questWindow.addQuest("Buy milk");
    }
}