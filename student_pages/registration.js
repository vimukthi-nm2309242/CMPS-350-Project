document.addEventListener("DOMContentLoaded", async function () {
    let allCourses = [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        window.location.href = "../loginpage/index.html";   //login checker
    }

    // Fetch user data from users.json
    async function retrieveUser() {
        const response = await fetch("../loginpage/users.json");
        if (response.ok) {
            const users = await response.json();
            return users.find(user => user.username === currentUser.username);
        }
        return null;
    }

    // Fetch and display courses
    async function courses() {
        const response = await fetch("courses.json");
        if (response.ok) {
            allCourses = await response.json();
            displayCourses(allCourses);     //passes all the courses objects to the display courses function
            filter(searchbar.value);        //this function allows use to input a value into the search field to filter stuff
        }
    }

    // Display courses in the container
    function displayCourses(courses) {
        const container = document.querySelector(".container");
        container.innerHTML = ""; // Clear previous content

        if (courses.length === 0) {
            container.innerHTML = "No courses Available";
            return;
        }

        courses.forEach(course => {
            const courseHTML = document.createElement("div");
            courseHTML.classList.add("classes");

            const registerBtn = document.createElement("button");
            registerBtn.innerText = "Register";
            registerBtn.dataset.courseId = course.id;

            registerBtn.addEventListener("click", async () => {
                const result = await prerequisiteCheck(course.id);
                if (result.success) {
                    courseUpdate(course.id);
                }
                courseMsg(result.message);
            });

            courseHTML.innerHTML = `
                <div class="items">
                    <div class="desc">
                        <h3>${course.name}</h3>
                        <div class="desc-content">
                            <div>
                                <p><strong>${course.code}</strong></p>
                                <p>Instructor: ${course.instructor ?? "TBD"}</p>
                                <p>Available seats: ${course.availableSeats}</p>
                                <p>Prerequisites: ${course.prerequisites.length > 0 ? course.prerequisites.join(", ") : "None"}</p>
                            </div>
                            <div class="register-btn"></div>
                        </div>
                    </div>
                </div>
            `;

            courseHTML.querySelector(".register-btn").appendChild(registerBtn);
            container.appendChild(courseHTML);
        });
    }

    // Filter courses based on search input
    function filter(search) {
        search = (search).toString().toLowerCase();   //converts the user input to string and without it, it causes errors

        if (!search) {
            displayCourses(allCourses);
            return;   //if user has not entered anything in the search field we display the courses as usual
        }

        const filtered = allCourses.filter(course =>
            course.name.toLowerCase().includes(search) ||
            course.category.toLowerCase().includes(search)
        );
        displayCourses(filtered);   //then we render out the filtered version
    }

    // Search functionality
    const searchbar = document.querySelector("#searchitem");
    const searchbtn = document.querySelector("#searchbtn");

    // searchbtn.addEventListener("click", () => {
    //     filter(searchbar.value);
    // });

    searchbar.addEventListener("input", ()=>{
        filter(searchbar.value);
    });


    // Check if user meets course prerequisites
    async function prerequisiteCheck(courseId) {
        const course = allCourses.find(course => course.id === courseId);
        const user = await retrieveUser(); //get logged in user information

        console.log(user);

        if (!user.registeredCourses) {
            user.registeredCourses = [];
        }

        if (!user.completedCourses) {
            user.completedCourses = [];
        }

        if (!course.openForRegistration) {
            return {
                success: false,
                message: "Course is not open for registration."
            };
        }

        if (course.availableSeats <= 0) {
            return {
                success: false,
                message: "Course is full."
            };
        }

        if (user.registeredCourses.includes(course.id)) {
            return {
                success: false,
                message: "You are already registered for this course"
            };
        }

        if (user.completedCourses.includes(course.id)) {
            return {
                success: false,
                message: "You have already completed this course"
            };
        }

        const missingPrerequisites = course.prerequisites.filter(c => !user.completedCourses.includes(c));
        //this variable filters out the prerequisities that the current user has not completed

        if (missingPrerequisites.length > 0) {
            return {
                success: false,
                message: `You need to complete ${missingPrerequisites.join(", ")} before registering for ${course.code}`
            }
        }

        return {
            success: true,
            message: "Registration successful, awaiting admin approval."
        }
    }

    // Display registration messages
    function courseMsg(message) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("messageContainer");

        messageContainer.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <div class="close-btn">Close</div>
            </div>
        `;

        const closeBtn = messageContainer.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
            messageContainer.remove();
        })

        document.body.appendChild(messageContainer);
    }

    // Update course and user registration
    async function courseUpdate(course) {
        course = allCourses.find(c => c.id === course);
        course.availableSeats--;

        const user = await retrieveUser();
        user.registeredCourses.push({ courseID: course.id, courseName: course.name, status: "pending" });

        localStorage.setItem('currentUser', JSON.stringify(user));

        const response = await fetch("../loginpage/users.json");
        if (response.ok) {
            const users = await response.json();
            const userIndex = users.findIndex(u => u.username === user.username);
            if (userIndex !== -1) {
                users[userIndex] = user;
            }
        }

        displayCourses(allCourses); //rerender the state
    }

    courses();    //call the course function to allow the courses to load
});