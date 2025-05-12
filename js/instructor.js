document.addEventListener("DOMContentLoaded", async function () {
    let allCourses = [];
    let allUsers = [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let instructorCourses = [];

    if (!currentUser || currentUser.type !== "instructor") {
        window.location.href = "../login.html";
    }

    // DOM elements
    const signOutBtn = document.getElementById("signOut");
    const viewAllMyCoursesBtn = document.getElementById("viewAllMyCourses");
    const viewOpenCoursesBtn = document.getElementById("viewOpenCourses");
    const viewInProgressCoursesBtn = document.getElementById("viewInProgressCourses");
    const coursesContainer = document.getElementById("coursesContainer");
    const statusFilter = document.getElementById("statusFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const courseModal = document.getElementById("courseModal");
    const closeModal = document.querySelector(".close");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const instructorName = document.getElementById("instructorName");

    // Set instructor name in header
    instructorName.textContent = currentUser.username;

    // Event listeners
    signOutBtn.addEventListener("click", signOut);
    viewAllMyCoursesBtn.addEventListener("click", () => displayCourses(instructorCourses));
    viewOpenCoursesBtn.addEventListener("click", () => {
        const openCourses = instructorCourses.filter(course => course.status === "open");
        displayCourses(openCourses);
    });
    viewInProgressCoursesBtn.addEventListener("click", () => {
        const inProgressCourses = instructorCourses.filter(course => course.status === "in-progress");
        displayCourses(inProgressCourses);
    });
    closeModal.addEventListener("click", () => courseModal.style.display = "none");
    closeModalBtn.addEventListener("click", () => courseModal.style.display = "none");
    statusFilter.addEventListener("change", filterCourses);
    categoryFilter.addEventListener("change", filterCourses);

    async function loadCourses() {
        try {
            const response = await fetch("./management-with-next/app/data/courses.json");
            if (response.ok) {
                allCourses = await response.json();
                // Filter courses taught by this instructor
                instructorCourses = allCourses.filter(course => course.instructor === currentUser.username);
            }
        } catch (error) {
            console.error("Error loading courses:", error);
        }
    }

    async function loadUsers() {
        try {
            const response = await fetch("./management-with-next/app/data/users.json");
            if (response.ok) {
                allUsers = await response.json();
            }
        } catch (error) {
            console.error("Error loading users:", error);
        }
    }

    function populateCategoryFilter() {
        // Get unique categories from instructor's courses
        const categories = instructorCourses
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
            if (course.status === "open") {
                statusClass = "status-open";
            } 
            else if (course.status === "in-progress") {
                statusClass = "status-in-progress";
            }
            else if (course.status === "closed") {
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
                    <p><strong>Description:</strong> ${course.description}</p>
                    <div class="registration-progress">
                        <span>${course.registeredStudents.length}/${totalSeats} registered</span>
                    </div>
                </div>
                <div class="course-actions">
                    <button class="view-details-btn" data-course-id="${course.id}">View Details</button>
                </div>
            `;
            
            coursesContainer.appendChild(courseCard);
        });

        // Add event listeners to view details buttons
        document.querySelectorAll(".view-details-btn").forEach(btn => {
            btn.addEventListener("click", () => viewCourseDetails(btn.dataset.courseId));
        });
    }

    function filterCourses() {
        const status = statusFilter.value;
        const category = categoryFilter.value;
        
        let filteredCourses = instructorCourses;
        
        if (status !== "all") {
            filteredCourses = filteredCourses.filter(course => course.status === status);
        }
        
        if (category !== "all") {
            filteredCourses = filteredCourses.filter(course => course.category === category);
        }
        
        displayCourses(filteredCourses);
    }

    function viewCourseDetails(courseId) {
        const course = instructorCourses.find(c => c.id === courseId);
        if (!course) return;
        
        const courseDetails = document.getElementById("courseDetails");
        const registeredStudentsList = document.getElementById("registeredStudentsList");
        const modalTitle = document.getElementById("modalTitle");
        
        modalTitle.textContent = `${course.code} - ${course.name}`;
        
        // Display course details
        courseDetails.innerHTML = `
            <p><strong>Category:</strong> ${course.category}</p>
            <p><strong>Status:</strong> ${course.status}</p>
            <p><strong>Available Seats:</strong> ${course.availableSeats}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Prerequisites:</strong> ${course.prerequisites.length > 0 ? course.prerequisites.join(", ") : "None"}</p>
            <p><strong>Open for Registration:</strong> ${course.openForRegistration ? "Yes" : "No"}</p>
        `;
        
        // Display registered students
        registeredStudentsList.innerHTML = "";
        if (course.registeredStudents.length === 0) {
            registeredStudentsList.innerHTML = "<li>No students registered yet</li>";
        } else {
            // Here we would ideally fetch student details, but for now just show student IDs
            course.registeredStudents.forEach(studentId => {
                const student = allUsers.find(user => user.id === studentId);
                const studentName = student ? student.username : studentId;
                const li = document.createElement("li");
                li.textContent = studentName;
                registeredStudentsList.appendChild(li);
            });
        }
        
        courseModal.style.display = "block";
    }

    function signOut() {
        localStorage.removeItem("currentUser");
        window.location.href = "../login.html";
    }

    // Initialize dashboard
    async function initDashboard() {
        await loadUsers();
        await loadCourses();
        populateCategoryFilter();
        displayCourses(instructorCourses);
    }

    // Start the initialization
    await initDashboard();
});