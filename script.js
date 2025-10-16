const content = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const signinBtn = document.getElementById('signinBtn');

const courses = [
  { id: 1, title: "HTML Basics", description: "Learn the structure of web pages.", completed: false },
  { id: 2, title: "CSS Fundamentals", description: "Style and design beautiful websites.", completed: false },
  { id: 3, title: "JavaScript Essentials", description: "Add interactivity and logic to your web apps.", completed: false }
];

// Display all courses
function showCourses() {
  content.innerHTML = `
    <h2>Available Courses</h2>
    <div class="course-list">
      ${courses.map(course => `
        <div class="course">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <button class="complete-btn ${course.completed ? 'completed' : ''}" onclick="toggleComplete(${course.id})">
            ${course.completed ? 'Completed ✅' : 'Mark Complete'}
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// Toggle course completion
function toggleComplete(id) {
  const course = courses.find(c => c.id === id);
  if (course) {
    course.completed = !course.completed;
    alert(course.completed ? `${course.title} completed! 🎉` : `${course.title} marked as incomplete.`);
    showCourses();
  }
}

// Simple sign-in form (mock)
function showSignIn() {
  content.innerHTML = `
    <div class="signin-form">
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onclick="signIn()">Login</button>
    </div>
  `;
}

function signIn() {
  alert("Login successful! (Demo only — no backend connected)");
  showCourses();
}

// Navigation
homeBtn.addEventListener('click', showCourses);
signinBtn.addEventListener('click', showSignIn);

// Initial load
showCourses();
