const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
menuToggle.addEventListener("click", function() {
    menu.classList.toggle("is-show");
    menu
})