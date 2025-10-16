const courses = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the basics of structuring web pages using HTML.",
    lessons: ["HTML Syntax", "Tags and Elements", "Building a Simple Page"],
  },
  {
    id: 2,
    title: "CSS for Beginners",
    description: "Style your web pages beautifully with CSS.",
    lessons: ["Selectors", "Box Model", "Flexbox & Grid"],
  },
  {
    id: 3,
    title: "JavaScript Essentials",
    description: "Add interactivity and logic to your websites.",
    lessons: ["Variables & Data Types", "DOM Manipulation", "Functions & Events"],
  },
];

const courseList = document.getElementById("course-list");
const courseDetails = document.getElementById("course-details");

// Load courses
function renderCourses() {
  courseList.innerHTML = "<h2>Available Courses</h2>";
  courses.forEach((course) => {
    const div = document.createElement("div");
    div.classList.add("course-card");
    div.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
    div.onclick = () => showCourseDetails(course.id);
    courseList.appendChild(div);
  });
}

// Show details
function showCourseDetails(id) {
  const course = courses.find((c) => c.id === id);
  courseDetails.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h4>Lessons:</h4>
    <ul>${course.lessons.map((l) => `<li>${l}</li>`).join("")}</ul>
    <button id="complete-btn" onclick="markComplete(${course.id})">
      Mark as Complete
    </button>
  `;
}

// Mark completed
function markComplete(id) {
  const btn = document.getElementById("complete-btn");
  alert("Lesson completed!");
  btn.innerText = "Completed ✅";
  btn.classList.add("completed");
  btn.disabled = true;
}

renderCourses();
