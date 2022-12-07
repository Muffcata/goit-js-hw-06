const numOfCategories = document.querySelectorAll("#categories>li");
console.log("Number of categories:", numOfCategories.length);

const categoryName = numOfCategories.forEach((elem) => {
  console.log(
    "Category:",
    elem.querySelector("h2").textContent,
    "Elements:",
    elem.querySelector("ul").childElementCount
  );
});
