document.getElementById('all-btn').addEventListener('click', () => {
    showAllCourses();
});

document.getElementById('cse-btn').addEventListener('click', () => {
    filterCourses('cse');
});

document.getElementById('wdd-btn').addEventListener('click', () => {
    filterCourses('wdd');
});

function showAllCourses() {
    const courses = document.querySelectorAll('.certificate-section button');
    courses.forEach(course => course.style.display = 'block');
}

function filterCourses(type) {
    const courses = document.querySelectorAll('.certificate-section button');
    courses.forEach(course => {
        if (!course.classList.contains(type)) {
            course.style.display = 'none';
        } else {
            course.style.display = 'block';
        }
    });
}
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
    console.log("Clicked");
});
