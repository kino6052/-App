const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");
const elements = [...inputs, ...textareas];

const paragraphs = elements.map((element) => {
  const paragraph = document.createElement("p");
  element.parentElement.appendChild(paragraph);

  return [element, paragraph];
});

setInterval(() => {
  paragraphs.forEach(([element, paragraph]) => {
    paragraph.innerHTML = element.value;
  });
}, 1000);
