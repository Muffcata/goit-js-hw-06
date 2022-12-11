function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const { log } = console;

const elements = document.querySelector("#controls");
log(elements);
const amount = document.querySelector("input");
const createBtn = document.querySelector("data-create");
const destroyBtn = document.querySelector("data-destroy");
const boxes = document.querySelector("#boxes");

//i - divy
// amount - ilość  divów
// div # boxes- dodawanie tam tych divów

//div wymiary 30px x 30px;
// następny o 10 px szerszy i wyższy od poprzedniego
// kolor tła losowy getrandomhexcolor

function createBoxes(amount) {
  for (let i = 0; i <= amount; i++);
  createBtn.addEventListener("click", (event) => boxes(amount.value));
  // let sizes =
  // const markup =
  log(createBtn);
}

// boxes.insertAdjacentHTML("afterbegin", markup);
