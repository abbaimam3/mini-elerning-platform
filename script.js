const courses = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "Learn the structure of web pages using HTML.",
    lessons: ["HTML Basics", "Tags & Attributes", "Building a Simple Page"],
  },
  {
    id: 2,
    title: "CSS for Beginners",
    description: "Style your web pages beautifully with CSS.",
    lessons: ["Selectors & Colors", "Box Model", "Layouts & Flexbox"],
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    description: "Make your website interactive with JavaScript.",
    lessons: ["Variables", "Functions", "DOM Manipulation"],
  },
];

const courseListPage = document.getElementById("course-list");
const courseDetailPage = document.getElementById("course-detail");
const coursesContainer = document.getElementById("courses");
const courseContent = document.getElementById("course-content");
const backBtn = document.getElementById("back-btn");

// Show all courses
function showCourses() {
  coursesContainer.innerHTML = "";
  courses.forEach((course) => {
    const div = document.createElement("div");
    div.className = "course-card";
    div.innerHTML = `
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <button onclick="viewCourse(${course.id})">View Details</button>
    `;
    coursesContainer.appendChild(div);
  });
}

function viewCourse(id) {
  const course = courses.find((c) => c.id === id);
  if (!course) return;

  courseContent.innerHTML = `
    <h2>${course.title}</h2>
    <p>${course.description}</p>
    <h4>Lessons:</h4>
    ${course.lessons
      .map(
        (lesson, i) => `
        <div class="lesson">
          <span>${i + 1}. ${lesson}</span>
          <button onclick="markCompleted(${id}, ${i})">Mark Completed</button>
        </div>
      `
      )
      .join("")}
    <button onclick="markCourseCompleted(${id})" style="margin-top:10px;background:green;">Mark Course as Completed</button>
  `;

  switchPage("course-detail");
}

function markCompleted(courseId, lessonIndex) {
  alert(`Lesson ${lessonIndex + 1} of Course ${courseId} marked as completed ✅`);
}

function markCourseCompleted(courseId) {
  alert(`Course ${courseId} marked as completed 🎉`);
}

function switchPage(pageId) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

backBtn.addEventListener("click", () => switchPage("course-list"));

showCourses();