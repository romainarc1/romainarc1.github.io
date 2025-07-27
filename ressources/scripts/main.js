// Header scroll

let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas
        header.classList.add("header-hidden");
    } else {
        // Scroll vers le haut
        header.classList.remove("header-hidden");
    }

        lastScrollY = currentScrollY;
});