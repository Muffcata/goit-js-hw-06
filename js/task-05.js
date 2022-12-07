const docQ = (selector) => document.querySelector(selector);
const { log } = console;

const textInput = docQ("#name-input");
const span = docQ("#name-output");

textInput.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (textInput.value === "") {
    span.textContent = "Anonymous";
  }
});
