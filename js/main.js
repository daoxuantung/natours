window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  name.addEventListener("blur", (e) => {
    name.style.borderColor = "transperant";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
