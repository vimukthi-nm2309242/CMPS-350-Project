document.addEventListener("DOMContentLoaded", async function () {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = "../loginpage/index.html"; //login check
        return;
    }

    async function retrieveUser(){
        const response = await fetch("../loginpage/users.json");
        if(response.ok){
            const users = await response.json();

            return users.find(user => user.username === currentUser);
        }
        return null;
    }
   
    const user = await retrieveUser();

    const headerDiv = document.querySelector(".studName");
    headerDiv.innerHTML = `<h2>Welcome ${user.username}</h2>`;


    async function displayCompletedCourses() {

        const completedCoursesContainer = document.querySelector(".completed");
        

        user.completedCourses.forEach(completedCourse => {
            const courseRow = document.createElement("div");
            courseRow.classList.add("course-row");
            
            courseRow.innerHTML = `
                <div>${completedCourse.courseName ?? "No courses"}</div>
                <div class="grade">${completedCourse.grade ?? "-"}</div>
            `;
            
            completedCoursesContainer.appendChild(courseRow);
        });

    }

    async function displayPendingCourses() {

        const pendingCoursesContainer = document.querySelector(".pending");
        
        
        user.registeredCourses.forEach(registeredCourse => {
            const courseRow = document.createElement("div");
            courseRow.classList.add("course-row");
            
            courseRow.innerHTML = `
                <div>${registeredCourse.courseName ?? "No courses"}</div>
                <div class="grade">${registeredCourse.grade ?? "-"}</div>
            `;
            
            pendingCoursesContainer.appendChild(courseRow);
        });

    }

    // Call the function to display courses
    displayCompletedCourses();
    displayPendingCourses();

} );