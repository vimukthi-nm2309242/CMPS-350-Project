document.addEventListener("DOMContentLoaded", async function () {
    let allCourses = [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));


    //selected only one dom element which is the signout button
    const signOutBtn = document.getElementById("signOut");
    if (signOutBtn) {
        signOutBtn.addEventListener("click", signOut);
    }


    if (!currentUser) {
        window.location.href = "../login.html";   //login checker
    }

    // Fetch user data from users.json
    async function retrieveUser() {
        const response = await fetch("./cmpsphase1/app/data/users.json");
        if (response.ok) {
            const users = await response.json();
            return users.find(user => user.username === currentUser.username);
        }
        return null;
    }

    // Fetch and display courses
    async function courses() {
        const response = await fetch("./cmpsphase1/app/data/courses.json");
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

        // console.log(user);

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
        if (!course.registeredStudents) {
            course.registeredStudents = [];
        }

        course.registeredStudents.push(currentUser.username); //pushes the particular user's username to array for admin to see

        const user = await retrieveUser();
        user.registeredCourses.push({ 
            courseID: course.id, 
            courseName: course.name, 
            status: "pending" 
        });

        localStorage.setItem('allCourses', JSON.stringify(allCourses));
        localStorage.setItem('currentUser', JSON.stringify(user));

        // this code in the bottom is used to update user data
        // searches for student and then adds the new info into it
        const response = await fetch("./jsons/users.json");
        if (response.ok) {
            const users = await response.json();
            const userIndex = users.findIndex(u => u.username === user.username);
            if (userIndex !== -1) {
                users[userIndex] = user;
            }
        }

        //calling api to save registration
        // const API_ENDPOINT = 'http://localhost:3001/api/users';
        // const response = await fetch('/api/register-course', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         userId: currentUser.id,
        //         courseId: course
        //     })
        // });
        
        // const result = await response.json();

        // if (!result.success) {
        //     console.error('Error saving registration:', result.message);
        //     courseMsg('Registration added locally, but failed to save to server: ' + result.message);
        // } else {
        //     // Fetch updated user info
        //     const user = await retrieveUser();
        //     localStorage.setItem('currentUser', JSON.stringify(user));
        //     console.log('Registration saved successfully!');
        // }



        // localStorage.setItem('currentUser', JSON.stringify(user));
        // localStorage.setItem('allCourses', JSON.stringify(allCourses));
        
        // console.log(course.registeredStudents);
        console.log(user);

        displayCourses(allCourses); //rerender the state
    }

    function signOut() {
        localStorage.removeItem("currentUser");
        window.location.href = "../login.html";
    }

    courses();    //call the course function to allow the courses to load
});