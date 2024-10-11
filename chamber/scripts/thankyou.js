// Extract URL parameters and display the submitted data
const params = new URLSearchParams(window.location.search);

document.getElementById('first-name').textContent = params.get('first-name');
document.getElementById('last-name').textContent = params.get('last-name');
document.getElementById('email').textContent = params.get('email');
document.getElementById('mobile-phone').textContent = params.get('mobile-phone');
document.getElementById('org-name').textContent = params.get('org-name');
document.getElementById('timestamp').textContent = params.get('timestamp');
