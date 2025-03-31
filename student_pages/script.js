document.addEventListener("DOMContentLoaded", function () {
    let allCourses = [];

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

            courseHTML.innerHTML = `
                <img>
                <div class="items">
                    <div class="desc">
                        <h3>${course.code}</h3>
                        <p>${course.name}</p>
                        <p>${course.instructor}</p>
                    </div>
                    <div class="register-btn">
                        <button>Register</button>
                    </div>
                </div>
            `;

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

    searchbar.addEventListener("input", () =>{
        filter(searchbar.value);
    })
    //this event listener listens to user inputs real time to filter out courses required by student

    courses();    //call the course function to allow the courses to load
});
