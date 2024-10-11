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
// Handle form submission and pass data to thankyou.html
document.getElementById('joinForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const mobilePhone = document.getElementById('mobile-phone').value;
    const orgName = document.getElementById('org-name').value;
    const timestamp = new Date().toISOString();

    // Redirect to thankyou.html with data in URL 
    const queryString = `?first-name=${encodeURIComponent(firstName)}&last-name=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&mobile-phone=${encodeURIComponent(mobilePhone)}&org-name=${encodeURIComponent(orgName)}&timestamp=${encodeURIComponent(timestamp)}`;
    
    window.location.href = `thankyou.html${queryString}`;
});
const cards = document.querySelectorAll('.card');

// Loop through each card
cards.forEach((card) => {
  // Add click event listener to each card
  card.addEventListener('click', () => {
    // Get the modal ID from the card's data-modal attribute
    const modalId = card.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    
    // Open the corresponding modal
    if (modal) {
      modal.style.display = 'block';
    }
  });
});

// Close modals when clicking the close button
const closeButtons = document.querySelectorAll('.close');

closeButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    // Hide the modal when close is clicked
    closeBtn.closest('.modal').style.display = 'none';
  });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  const modals = document.querySelectorAll('.modal');
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

