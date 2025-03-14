const button = document.querySelector(".theme-button");
const body = document.querySelector(".container");

button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});