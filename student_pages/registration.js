document.addEventListener("DOMContentLoaded", async function () {
    let allCourses = [];

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(!currentUser){
        window.location.href = "../loginpage/index.html";   //login checker
    }

    async function retrieveUser(){
        const response = await fetch("../loginpage/users.json");
        if(response.ok){
            const users = await response.json();

            return users.find(user => user.username === currentUser.username);
        }
        return null;
    }
    //code to find array of the current user from users.json


    async function courses() {
        const response = await fetch("courses.json");
        if (response.ok) {
            allCourses = await response.json();
            displayCourses(allCourses);     //passes all the courses objects to the display courses function
            
            filter(searchbar.value);     //this function allows use to input a value into the search field to filter stuff

        }
    }

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
                

                if(result.success){
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

            // in the student dashboard HTML there is a boiler template that is created 
            // it is used as a reference to generate the HTML content in JS using creaateElement
            // then we can use the forEach function to generate the courses for each object from the 
            // courses.json file.
        });
    }

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
        //this filtered variable filters the courses based on what the user haas entered
        //watched youtube tutorials to figure this one out

        displayCourses(filtered);   //then we render out the filtered version
    }

    const searchbar = document.querySelector("#searchitem");

    const searchbtn = document.querySelector("#searchbtn");

    searchbtn.addEventListener("click", () => {
        filter(searchbar.value);            
    })


    async function prerequisiteCheck(courseId){
        const course = allCourses.find(course => course.id === courseId);   
        //when user clicks on the register button it finds this particular course 
        
        const user = await retrieveUser(); //get logged in user information

        if (!user.registeredCourses) {
            user.registeredCourses = [];
        }
        
        if (!user.completedCourses) {
            user.completedCourses = [];
        }


        if(!course.openForRegistration){
            return {
                success: false,
                message: "Course is not open for registration."
            };
        }

        if(course.availableSeats <=0){
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
        //it searches through the completed courses and if it does not include that particular prereq
        //then it adds it into the missingprereq array

        if(missingPrerequisites.length > 0){
            return {
                success: false,
                message: `You need to complete ${missingPrerequisites.join(", ")} before registering for ${course.id}`
            }
        }

        return{
            success: true,
            message: "Registration successful, awaiting admin approval."
        }

        //above are few basic validations just to see if there are seats or if the class is open or if there is no prerequisites

    }

    function courseMsg(message){
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

    async function courseUpdate(course){
        course = allCourses.find(c => c.id === course)

        // course.availableSeats--;

        const user = await retrieveUser();

        user.registeredCourses.push({id: course.id, status: "pending"}); //this is mainly used for the admin implementation

        localStorage.setItem('courses', JSON.stringify(allCourses));   //saves the course data into local storage
        localStorage.setItem('currentUser',JSON.stringify(user));       //same for the user info as well
    
        const response = await fetch("../loginpage/users.json");
        if (response.ok) {
            const users = await response.json();
            const userIndex = users.findIndex(u => u.username === user.username);
            if (userIndex !== -1) {
                users[userIndex] = user;
 
            }
        }
        //the above method calls the users.json and finds the index of the student that is registering for the course
        //after retrieving the index we then update the information of the user of that particular index

        displayCourses(allCourses); //rerender the state

    }

    courses();    //call the course function to allow the courses to load
});