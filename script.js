const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

menu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
});

menuOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


const menuLinks = mobileMenu.querySelectorAll("a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    });
});