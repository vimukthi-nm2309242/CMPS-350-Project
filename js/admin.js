// import { nanoid } from "nanoid";

document.addEventListener("DOMContentLoaded", async function () {
    let allCourses = [];
    let allUsers = [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = "../login.html";
    }

    // DOM elements
    const signOutBtn = document.getElementById("signOut");
    const viewAllCoursesBtn = document.getElementById("viewAllCourses");
    const viewOpenCoursesBtn = document.getElementById("viewOpenCourses");
    const createCourseBtn = document.getElementById("createCourseBtn");
    const coursesContainer = document.getElementById("coursesContainer");
    const statusFilter = document.getElementById("statusFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const courseModal = document.getElementById("courseModal");
    const modalTitle = document.getElementById("modalTitle");
    const courseForm = document.getElementById("courseForm");
    const closeModal = document.querySelector(".close");

    // Event listeners
    signOutBtn.addEventListener("click", signOut);
    viewAllCoursesBtn.addEventListener("click", () => displayCourses(allCourses));
    viewOpenCoursesBtn.addEventListener("click", () => {
        const openCourses = allCourses.filter(course => course.openForRegistration);
        displayCourses(openCourses);
    });
    createCourseBtn.addEventListener("click", () => openCourseModal());
    closeModal.addEventListener("click", () => courseModal.style.display = "none");
    statusFilter.addEventListener("change", filterCourses);
    categoryFilter.addEventListener("change", filterCourses);
    courseForm.addEventListener("submit", handleCourseSubmit);


    async function loadCourses() {
        // const response = await fetch("./jsons/courses.json");
        const response = await fetch("./management-with-next/app/data/courses.json");
        if (response.ok) {
            allCourses = await response.json();
        }
    }

    async function loadUsers() {
        const response = await fetch("./management-with-next/app/data/users.json");
        if (response.ok) {
            allUsers = await response.json();
        }
    }

    function populateCategoryFilter() {
        // Get unique categories from courses
        const categories = allCourses
        .map(course => course.category)
        .filter((category, index, array) => array.indexOf(category) === index);
        
        categoryFilter.innerHTML = '<option value="all">All Categories</option>';
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    function displayCourses(courses) {
        coursesContainer.innerHTML = "";
        
        if (courses.length === 0) {
            coursesContainer.innerHTML = "<p>No courses found</p>";
            return;
        }

        courses.forEach(course => {
            const courseCard = document.createElement("div");
            courseCard.className = "course-card";
            
            // Determine status badge color
            let statusClass = "";
            if (course.status === "open"){
                statusClass = "status-open";
            } 
            else if (course.status === "in-progress"){
                statusClass = "status-in-progress";
            }
            else if (course.status === "closed"){
                statusClass = "status-closed";
            } 
            
            const totalSeats = course.availableSeats + course.registeredStudents.length;
            
            courseCard.innerHTML = `
                <div class="course-header">
                    <h3>${course.code} - ${course.name}</h3>
                    <span class="status-badge ${statusClass}">${course.status}</span>
                </div>
                <div class="course-details">
                    <p><strong>Category:</strong> ${course.category}</p>
                    <p><strong>Instructor:</strong> ${course.instructor || "TBD"}</p>
                    <p><strong>Description:</strong> ${course.description}</p>
                    <div class="registration-progress">
                        <span>${course.registeredStudents.length}/${totalSeats} registered </span>
                    </div>
                </div>
                <div class="course-actions">
                    ${course.openForRegistration ? `
                        <button class="validate-btn" data-course-id="${course.id}">
                            ${course.status === "open" ? "Validate" : "Cancel"}
                        </button>
                    ` : ""}
                    <button class="edit-btn" data-course-id="${course.id}">Edit</button>
                    <button class="delete-btn" data-course-id="${course.id}">Delete</button>
                </div>
            `;
            
            coursesContainer.appendChild(courseCard);
        });

        // Event listeners to action buttons
        document.querySelectorAll(".validate-btn").forEach(btn => {
            btn.addEventListener("click", () => validateCourse(btn.dataset.courseId));
        });
        
        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", () => openCourseModal(btn.dataset.courseId));
        });
        
        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", () => deleteCourse(btn.dataset.courseId));
        });
    }

    function filterCourses() {
        const status = statusFilter.value;
        const category = categoryFilter.value;
        
        let filteredCourses = allCourses;
        
        if (status !== "all") {
            filteredCourses = filteredCourses.filter(course => course.status === status);
        }
        
        if (category !== "all") {
            filteredCourses = filteredCourses.filter(course => course.category === category);
        }
        
        displayCourses(filteredCourses);
    }

    function openCourseModal(courseId = null) {
        // Reset form
        courseForm.reset();
        
        // Populate instructors dropdown
        const instructorSelect = document.getElementById("courseInstructor");
        instructorSelect.innerHTML = "";
        const instructors = allUsers.filter(user => user.type === "instructor");
        
        instructors.forEach(instructor => {
            const option = document.createElement("option");
            option.value = instructor.username;
            option.textContent = instructor.username;
            instructorSelect.appendChild(option);
        });
        
        if (courseId) {
            // Edit mode
            modalTitle.textContent = "Edit Course";
            document.getElementById("courseId").value = courseId;
            
            const course = allCourses.find(c => c.id === courseId);
            if (course) {
                document.getElementById("courseCode").value = course.code;
                document.getElementById("courseName").value = course.name;
                document.getElementById("courseCategory").value = course.category;
                document.getElementById("courseInstructor").value = course.instructor || "";
                document.getElementById("courseDescription").value = course.description;
                document.getElementById("courseSeats").value = course.availableSeats;
                document.getElementById("coursePrerequisites").value = course.prerequisites.join(", ");
                document.getElementById("courseStatus").value = course.status;
                document.getElementById("openForRegistration").checked = course.openForRegistration;
            }
        } else {
            // Create mode
            modalTitle.textContent = "Create New Course";
            document.getElementById("courseId").value = "";
        }
        
        courseModal.style.display = "block";
    }

    // Function used to create the new course when user clicks on create new course button
    async function handleCourseSubmit(e) {
        e.preventDefault();
        
        const courseId = document.getElementById("courseId").value;
        const isEdit = !!courseId;  //used to convert the courseID into a boolean
        
        const courseData = {
            id: courseId,
            code: document.getElementById("courseCode").value,
            name: document.getElementById("courseName").value,
            category: document.getElementById("courseCategory").value,
            instructor: document.getElementById("courseInstructor").value,
            description: document.getElementById("courseDescription").value,
            availableSeats: parseInt(document.getElementById("courseSeats").value),
            prerequisites: document.getElementById("coursePrerequisites").value
                .split(",")
                .map(p => p.trim())
                .filter(p => p),
            status: document.getElementById("courseStatus").value,
            openForRegistration: document.getElementById("openForRegistration").checked,
            registeredStudents: isEdit ? 
                allCourses.find(c => c.id === courseId)?.registeredStudents ?? [] 
                : []
        };
        
        if (isEdit) {
            // Update existing course
            const index = allCourses.findIndex(c => c.id === courseId);
            if (index !== -1) {
                allCourses[index] = courseData;
            }
        } else {
            // Add new course
            allCourses.push(courseData);
        }

        // await saveCourse(courseData);
        await saveCourse(allCourses);
        displayCourses(allCourses);
        courseModal.style.display = "none";
    }

    async function validateCourse(courseId) {
        const course = allCourses.find(c => c.id === courseId);
        if (!course) return;
        
        // Check if course has enough students registered and we use temp value 
        if (course.registeredStudents.length >= 5) {
            course.status = "in-progress";
        } else {
            course.status = "closed";
            course.openForRegistration = false;
        }
        
        // await saveCourse(allCourses)
        displayCourses(allCourses);
    }

    async function deleteCourse(courseId) {
            allCourses = allCourses.filter(c => c.id !== courseId);
            // await saveCourse(allCourses)
            displayCourses(allCourses);
    }

    // async function saveCourses() {
    //     const response = await fetch("./jsons/courses.json",{
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(allCourses),
    //     })
    // }

    async function saveCourse(course){
        const API_ENDPOINT = 'http://localhost:3000/api/courses';
        const response = await fetch(
          API_ENDPOINT,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
          }
        )
      
    }

    function signOut() {
        localStorage.removeItem("currentUser");
        window.location.href = "../login.html";
    }

    // Functions
    async function initDashboard() {
        await loadCourses();
        await loadUsers();
        populateCategoryFilter();
        displayCourses(allCourses);
    }

    // Call all functions to initialize dashboard work
    await initDashboard();
});