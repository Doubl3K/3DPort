/**
 * Initializes the tooltip for the keyboard keys in the main Menu
 * @module Tooltip
 */
export function initKeyboardTooltip(body) {
	let keys = Array.from(body.getElementsByClassName("keys"));
	let tooltip = buildTooltip();
	showTooltip(keys, tooltip);
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
