const textInput = document.querySelector("#validation-input");
const lengthValue = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
  if (parseInt(lengthValue) === textInput.value.trim().length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
