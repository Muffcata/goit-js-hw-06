function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBackgr = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

const selectColor = () => {
  const chooseColor = getRandomHexColor();
  span.textContent = chooseColor;
  btn.style.background = chooseColor;
  colorBackgr.style.background = chooseColor;
};

btn.addEventListener("click", selectColor);
