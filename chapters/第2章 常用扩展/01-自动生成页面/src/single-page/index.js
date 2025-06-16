const containerEl = document.querySelector("#app > .container");

const spanEl = document.createElement("span");
spanEl.textContent = "who are me?";

containerEl.insertAdjacentElement("afterend", spanEl);
