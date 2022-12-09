const { log } = console;

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Complete all the fields");
  }

  log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
