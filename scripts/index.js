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

function displayCourses(filter = 'all') {
    const coursesContainer = document.getElementById('courses');
    coursesContainer.innerHTML = ''; // Clear the container

    // Filter courses based on the selected subject
    const filteredCourses = courses.filter(course => {
        return filter === 'all' || course.subject === filter;
    });

    // Loop through the filtered courses and display them
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        
        // If the course is completed, add the 'completed' class for different styling
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        // Create course card content
        courseCard.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
            <p>${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;

        coursesContainer.appendChild(courseCard);
    });

    // Update total credits
    updateTotalCredits(filteredCourses);
}

// Function to calculate and display total credits
function updateTotalCredits(courseList) {
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').textContent = totalCredits;
}

// Function to filter courses based on subject
function filterCourses(subject) {
    displayCourses(subject);
}

// Initialize the page by displaying all courses
window.onload = () => {
    displayCourses('all');
};