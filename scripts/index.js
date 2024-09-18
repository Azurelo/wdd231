document.getElementById('all-btn').addEventListener('click', () => {
    showAllCourses();
});

document.getElementById('cse-btn').addEventListener('click', () => {
    filterCourses('cse');
});

document.getElementById('wdd-btn').addEventListener('click', () => {
    filterCourses('wdd');
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    console.log("Clicked");
});

