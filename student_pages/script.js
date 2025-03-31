document.addEventListener("DOMContentLoaded", async function(){


    let allCourses = [];

    const response = await fetch("courses.json");
    if(response.ok){
        allCourses = await response.json();
    }

    console.log(allCourses);


    function displayCourses(courses){
        const container = document.querySelector(".container");

        if(courses.length === 0){
            container.innerHTML = "No courses Available";
            return;
        }


        courses.forEach(course =>{
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
                        <button class="register-btn">Register</button>
                    </div>
                </div>

            `

            container.appendChild(courseHTML);

        });
    }

    displayCourses(allCourses);



});