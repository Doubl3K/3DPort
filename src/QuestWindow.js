import "./CSS/questWindow.css";
export class QuestWindow {
    constructor() {
        this.questWindow = document.createElement("div");
        this.questWindow.className = "questWindow";
        document.body.appendChild(this.questWindow);
    }

    show() {
        this.questWindow.style.display = "block";
    }

    hide() {
        this.questWindow.style.display = "none";
    }

    addQuest(questText){
        let questWrapper = buildQuestToAdd(questText);
        this.questWindow.appendChild(questWrapper);
    }

    finishQuest(quest){
        this.tickQuest(quest);
        this.crossOutQuest(quest);
        quest.classList.remove("blinking");
        console.log(quest.classList);
        setTimeout(() => {
            quest.classList.add("blinking");
            console.log(quest.classList);
        }, 10);

    }

    tickQuest(quest){
        quest.children[0].innerHTML = "☑";
    }

    crossOutQuest(quest){
        quest.children[1].classList.add("done");
    }
}


function buildQuestToAdd(questText){
        let questWrapper = document.createElement("div");
        questWrapper.className = "questWrapper";
        

        let questCheckbox = document.createElement("span")
        questCheckbox.className = "questCheckbox";
        questCheckbox.innerHTML = "☐";
        questWrapper.appendChild(questCheckbox);

        let questTextWrapper = document.createElement("span");
        questTextWrapper.className = "questText";
        questTextWrapper.appendChild(document.createTextNode(questText));
        questWrapper.appendChild(questTextWrapper);
        
        questWrapper.classList.add("blinking")

        return questWrapper;
}