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

document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.navbar a');

    menuItems.forEach(item => {

        item.classList.remove('current');

        if (item.href === currentLocation) {
            item.classList.add('current');
        }
    });
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses(coursesToShow) {
    const coursesContainer = document.getElementById('courses');
    coursesContainer.innerHTML = ''; 
    
    coursesToShow.forEach(course => {
        const courseElement = document.createElement('button');
        courseElement.classList.add(course.subject.toLowerCase());

        if (course.completed) {
            courseElement.classList.add('completed');
        }

        courseElement.textContent = `${course.subject} ${course.number}: ${course.title}`;
        coursesContainer.appendChild(courseElement);
    });
}

// Function to calculate and display total credits
function calculateCredits() {
    const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total Credits: ${totalCredits}`;
}

// Filter the courses based on button click (All, CSE, WDD)
document.getElementById('all-btn').addEventListener('click', () => displayCourses(courses));
document.getElementById('cse-btn').addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'CSE')));
document.getElementById('wdd-btn').addEventListener('click', () => displayCourses(courses.filter(course => course.subject === 'WDD')));

// Initial page load
displayCourses(courses);  
calculateCredits();

