/**
 * Initializes the tooltips for the main menu
 * @param {HTMLBodyElement} body - The body element of the document
 */
export function initMainMenuTooltip(body) {
	initKeyboardTooltip(body);
	initMouseTooltip(body);
}

/**
 * Initializes the tooltip for the keyboard keys in the main Menu
 */
function initKeyboardTooltip(body) {
	let keys = Array.from(body.getElementsByClassName("keys"));
	let tooltip = buildTooltip();
	showTooltip(keys, tooltip);
}

/**
 * Initializes the tooltip for the mouse in the main Menu
 */
function initMouseTooltip(body) {
	let mouse = Array.from(body.getElementsByClassName("mouseWrapper"));
	let tooltip = buildTooltip();
	showTooltip(mouse, tooltip);
}

/**
 * Shows a tooltip when hovering over an element
 * @param {Array<HTMLElement>} htmlElementArr - Array of HTMLElements to show the tooltip on
 */
function showTooltip(htmlElementArr, tooltip) {
	htmlElementArr.forEach((element) => {
		element.addEventListener("mouseover", () => {
			tooltip.innerHTML = element.dataset.tooltip;
			element.appendChild(tooltip);
		});
		element.addEventListener("mouseout", () => {
			if (element.contains(tooltip)) {
				element.removeChild(tooltip);
			}
		});
	});
}

/**
 * Builds a tooltip element to be used on Elements
 * @returns {HTMLElement} tooltip
 */
function buildTooltip() {
	let tooltip = document.createElement("span");
	tooltip.classList.add("tooltip");
	tooltip.style.pointerEvents = "none";
	return tooltip;
}
