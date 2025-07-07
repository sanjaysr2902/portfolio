// Scroll to top button logic
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    // Show or hide the scroll button
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";

    // Highlight active navbar link based on scroll position
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Scroll to top on button click
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact form submission handler
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload

    const name = document.getElementById("name").value;

    alert(`Thank you, ${name}! Your message has been received.`);
    form.reset(); // Clear all inputs
});
