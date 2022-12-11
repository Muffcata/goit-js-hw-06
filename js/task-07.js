const { log } = console;

const changeSize = document.querySelector("#font-size-control");
const inputValue = document.querySelector("#text");
changeSize.addEventListener("input", () => {
  inputValue.style.fontSize = `${changeSize.value}px`;
});
