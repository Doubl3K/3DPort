import "./CSS/cli.css";
import { keyboardEnableSwitch } from "./KeyboardInput";

let cliWrapper;
let cliHistory;
let cliInput;
let controls;

/**
 * Initialize the CLI
 * @param {HTMLElement} body - The body element of the document
 * @param {Controls} mainControls - The controls of the scene
 */
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

/**
 * Adds an event listener to the CLI to use commands on Enter
 * @param {HTMLInputElement} cliInput - The input element of the CLI
 */
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

/**
 * Chooses further action based on the command
 * @param {string} command - The cli Input to execute
 */

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

/**
 * Exits the CLI by hiding it and enabling the controls
 */
function exitCli() {
	cliWrapper.classList.toggle("hidden");
	controls.connect();
	keyboardEnableSwitch();
}
