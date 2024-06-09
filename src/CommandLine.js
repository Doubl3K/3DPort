import "./CSS/cli.css";
import { keyboardEnableSwitch } from "./KeyboardInput";

let cliWrapper;
let cliHistory;
let cliInput;
let controls;

export function initCLI(body, mainControls) {
	controls = mainControls;
	keyboardEnableSwitch();

	cliWrapper = document.createElement("div");
	cliWrapper.classList.add("cliWrapper");

	cliHistory = document.createElement("p");
	cliHistory.classList.add("cliHistory");

	cliInput = document.createElement("input");
	cliInput.setAttribute("type", "text");
	cliInput.classList.add("cliInput");

	cliWrapper.append(cliHistory, cliInput);
	body.append(cliWrapper);
	cliEnterListener(cliInput);
	return cliWrapper;
}

function cliEnterListener(cliInput) {
	cliInput.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			commandSwitcher(cliInput.value);
			cliHistory.innerHTML += cliInput.value + "<br>";
			cliInput.value = "";
			cliHistory.scrollTop = cliHistory.scrollHeight;
		}
	});
}

function commandSwitcher(command) {
	console.log(command);
	switch (command) {
		case "exit":
			cliInput.value = "";
			exitCli();
			break;
		case "help":
			cliHistory.innerHTML += "Commands: exit, help, clear";
			break;
		case "clear":
			cliHistory.innerHTML = "";
			break;
		default:
			cliHistory.innerHTML += "Command not found: ";
			break;
	}
}

function exitCli() {
	cliWrapper.classList.toggle("hidden");
	controls.connect();
	keyboardEnableSwitch();
}
