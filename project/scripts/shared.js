// Select the hamburger menu and navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// Toggle the navigation visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Check if dark mode is already enabled based on local storage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Toggle dark mode on button click
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Update local storage based on the current state
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Set the initial button text
const darkModeToggleBtn = document.getElementById('darkModeToggle');
darkModeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';

// Update button text when toggling
darkModeToggleBtn.addEventListener('click', () => {
    darkModeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light' : 'Dark';
});
