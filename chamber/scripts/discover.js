const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
const lastModification = document.getElementById("lastModified")
let oLastModif = new Date(document.lastModified);
//wayfinding
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        if (link.href.includes(currentPath)) {
            link.classList.add('active');
        }
    });
});

currentYearSpan.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = "Last modified: " + formatDate(lastModifiedDate);
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
        
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (lastVisit) {
        const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    // Store the current visit date
    localStorage.setItem("lastVisit", now);
});
