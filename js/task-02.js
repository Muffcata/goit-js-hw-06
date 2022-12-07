const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const newList = document.createElement("li");
const name = document.querySelector("#ingredients");
console.log(ingredients.value);
list.append(newList);
newList.classList.toggle("item");

console.log(newList);

const addIngredients = document.querySelectorAll("newList>li");
ingredients.forEach((elem) => {
  newList.append(elem);
});
