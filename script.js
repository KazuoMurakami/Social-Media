let html = document.querySelector("html");
let checkBox = document.querySelector("input[type=checkbox]");
checkBox.addEventListener("change", function () {
  html.classList.toggle("darkMode");
});
