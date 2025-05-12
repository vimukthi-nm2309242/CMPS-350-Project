document.addEventListener("DOMContentLoaded", async function () {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));


    const signOutBtn = document.getElementById("signOut");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", signOut);
    }

    if (!currentUser) {
        window.location.href = "../login.html"; //login check
        return;
    }

    async function retrieveUser(){
        const response = await fetch("./management-with-next/app/data/users.json");
        if(response.ok){
            const users = await response.json();

            return users.find(user => user.username === currentUser.username);
        }
        return null;
    }
   
    const user = await retrieveUser();

    const headerDiv = document.querySelector(".studName");
    headerDiv.innerHTML = `<h2>Hello ${user.username}!</h2>`;


    async function displayCompletedCourses() {

        const completedCoursesContainer = document.querySelector(".completed");
        const courseRow = document.createElement("div");
        courseRow.classList.add("course-row");

        if(user.completedCourses.length === 0){
            courseRow.innerHTML = `
                <div>No courses completed yet.</div>
                <div class="grade">-</div>
            `;

            completedCoursesContainer.appendChild(courseRow);
        }
        else{
            user.completedCourses.forEach(completedCourse => {
                const courseRow = document.createElement("div");
                courseRow.classList.add("course-row");
            
                courseRow.innerHTML = `
                    <div>${completedCourse.courseName}</div>
                    <div class="grade">${completedCourse.grade}</div>
                `;
            
                completedCoursesContainer.appendChild(courseRow);
            });
        }

    }
    async function displayCourseInProgress(){
        const inProgressContainer = document.querySelector(".inprogress")
        user.currentCourses.forEach(current => {
            const courseRow = document.createElement("div");
            courseRow.classList.add("course-row");
            
            courseRow.innerHTML = `
                <div>${current.courseName ?? "No courses"}</div>
                <div class="grade">${current.grade ?? "-"}</div>
            `;
            
            inProgressContainer.appendChild(courseRow);
        });
    }

    async function displayPendingCourses() {

        const pendingCoursesContainer = document.querySelector(".pending");
        
        
        user.registeredCourses.forEach(registeredCourse => {
            const courseRow = document.createElement("div");
            courseRow.classList.add("course-row");
            
            courseRow.innerHTML = `
                <div>${registeredCourse.courseName ?? "No courses"}</div>
            `;
            
            pendingCoursesContainer.appendChild(courseRow);
        });

    }
    function signOut() {
        localStorage.removeItem("currentUser");
        window.location.href = "../login.html";
    }

    // Call the function to display courses
    displayCompletedCourses();
    displayCourseInProgress();
    displayPendingCourses();

} );