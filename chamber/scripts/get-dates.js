const currentYearSpan = document.getElementById("curyear");
const currentYear = new Date().getFullYear();
const lastModification = document.getElementById("lastMod")
let oLastModif = new Date(document.lastModified);

currentYearSpan.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("lastMod");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = "Last modified: " + formatDate(lastModifiedDate);
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}
