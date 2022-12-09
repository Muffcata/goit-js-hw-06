const { log } = console;

const changeSize = document.querySelector("#font-size-control");

changeSize.addEventListener("input", (event) => {
  const inputValue = document.querySelector("#text");
  inputValue.style.fontSize = `${changeSize.value}px`;
});
