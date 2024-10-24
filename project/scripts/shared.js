// Select the hamburger menu and navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

// Toggle the navigation visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});
