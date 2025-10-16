const main = document.getElementById("mainContent");
const homeBtn = document.getElementById("homeBtn");

const courses = [
  {
    id: 1,
    title: "Web Development",
    level: "Beginner",
    lessons: ["HTML Basics", "CSS Layout", "JavaScript Intro"]
  },
  {
    id: 2,
    title: "React Fundamentals",
    level: "Intermediate",
    lessons: ["Components", "State & Props", "Hooks"]
  },
  {
    id: 3,
    title: "UI/UX Design",
    level: "Advanced",
    lessons: ["Design Principles", "Prototyping", "User Testing"]
  }
];

let completedLessons = {};

function renderCourses() {
  main.innerHTML = `
    <div class="course-list">
      ${courses.map(c => `
        <div class="course-card" onclick="viewCourse(${c.id})">
          <h3>${c.title}</h3>
          <p>Level: ${c.level}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function viewCourse(id) {
  const course = courses.find(c => c.id === id);
  const total = course.lessons.length;
  const done = completedLessons[id] ? completedLessons[id].length : 0;
  const percent = Math.round((done / total) * 100);

  main.innerHTML = `
    <div class="course-details">
      <h2>${course.title}</h2>
      <p>Level: ${course.level}</p>
      <div class="progress-bar"><div class="progress-fill" style="width:${percent}%;"></div></div>
      <h3>Lessons</h3>
      ${course.lessons.map((l, i) => {
        const completed = completedLessons[id]?.includes(i);
        return `
          <div class="lesson ${completed ? "completed" : ""}">
            <span>${l}</span>
            <button class="complete-btn ${completed ? "completed" : ""}" onclick="markLesson(${id},${i})">
              ${completed ? "✓ Completed" : "Mark Complete"}
            </button>
          </div>
        `;
      }).join('')}
      <button onclick="renderCourses()">← Back</button>
    </div>
  `;
}

function markLesson(courseId, lessonIndex) {
  completedLessons[courseId] = completedLessons[courseId] || [];
  const lessons = completedLessons[courseId];
  if (!lessons.includes(lessonIndex)) {
    lessons.push(lessonIndex);
  }
  viewCourse(courseId);
}

homeBtn.addEventListener("click", renderCourses);
renderCourses();
