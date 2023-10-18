// Make all text on the page bold
const elements = document.querySelectorAll("body, body *");
elements.forEach((element) => {
  element.style.fontWeight = "bold";
});

const container = document.createElement("div");
container.setAttribute(
  "style",
  "display: flex; flex-direction: column; position: fixed; top: 0; right: 0; z-index: 999;"
);

const input = document.createElement("input");
input.setAttribute("placeholder", "Enter URL");

const button = document.createElement("button");
input.innerHTML = "Go!";

container.appendChild(input);
container.appendChild(button);

document.body.appendChild(container);

button.onclick = () => {
  location.href = input.value;
};
