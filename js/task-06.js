const docQ = (selector) => document.querySelector(selector);
const { log } = console;

const textInput = docQ("#validation-input");

textInput.addEventListener("blur", () => {
  if (textInput.value.length >= 6) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else textInput.classList.remove("invalid");
  textInput.classList.add("valid");
});
