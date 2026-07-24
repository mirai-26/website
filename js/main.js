// ========================================
// ACTIVE NAVIGATION
// ========================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage ||
        (currentPage === "" && linkPage === "index.html")) {

        link.classList.add("active");

    }

});