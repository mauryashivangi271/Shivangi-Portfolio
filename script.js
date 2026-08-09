// =========================
// Smooth scrolling
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =========================
// Scroll reveal animation
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// =========================
// Current year in footer
// =========================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        `© ${year} Shivangi Maurya. All Rights Reserved.`;
}


// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}