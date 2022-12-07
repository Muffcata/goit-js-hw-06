let counterValue = 0;
const span = document.querySelector("#value");

const decrBtn = document.querySelector('button[data-action="decrement"]');

const incrBtn = document.querySelector('button[data-action="increment"]');

const handleClickDec = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const handleClickInc = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
decrBtn.addEventListener("click", handleClickDec);
incrBtn.addEventListener("click", handleClickInc);
