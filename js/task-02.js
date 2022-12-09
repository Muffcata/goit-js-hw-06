const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const newList = ingredients.forEach((elem) => {
  const addIngredients = document.createElement("li");
  addIngredients.textContent = elem;
  addIngredients.classList.add("item");
  list.append(addIngredients);
});
