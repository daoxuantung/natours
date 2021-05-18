window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("form");
  const toggle = document.getElementById("toggle");
  const background = document.getElementById("background");
  const nav = document.getElementById("nav");
  const stick1 = document.getElementById("stick-1");
  const stick2 = document.getElementById("stick-2");
  const stick3 = document.getElementById("stick-3");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  toggle.addEventListener("click", () => {
    stick1.classList.toggle("rotate");
    stick2.classList.toggle("transparent");
    stick3.classList.toggle("rotate-reverse");
    background.classList.toggle("show");
    nav.classList.toggle("isShow");
  });
});
