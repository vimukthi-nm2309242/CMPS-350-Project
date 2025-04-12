document.addEventListener("DOMContentLoaded", function(){

  const user = document.querySelector("#username");
  const pw = document.querySelector("#password");
  const typeOF = document.querySelector("#userType");
  const signin = document.querySelector("#submitButton");

  const usernameError = document.querySelector("#username-error");
  const passwordError = document.querySelector("#password-error");
  const loginError = document.querySelector("#login-error");



  signin.addEventListener("click", async (e) => {
    e.preventDefault();

    const username = user.value.trim();
    const password = pw.value.trim();
    const type = typeOF.value.trim();

    usernameError.innerText = "";
    passwordError.innerText = "";
    loginError.innerText = "";

    let hasError = false;  //this acts as a flag so itll reset the entire login page


    if(!username && !password){
      loginError.innerText = "Fill in all fields.";
      hasError = true;
    }
    if (!username) {
      loginError.innerText = "Username is required.";
      hasError = true;
    }
    if (!password) {
      loginError.innerText = "Password is required.";
      hasError = true;
    }
    if (hasError) return;

    const response = await fetch("./jsons/users.json");
    const users = await response.json();

    const detail = users.find(u => 
      u.username === username &&
      u.password === password &&
      u.type === type
    );

    if(detail){

      localStorage.setItem('currentUser', JSON.stringify({
        username: detail.username,
        type: detail.type
        // completedCourses: detail.completedCourses ?? [],
        // registeredCourses: detail.registeredCourses ?? []
      }));

      if(type==="student"){
        window.location.href = "studentdashboard.html";
      }
      if(type ==="instructor"){
        window.location.href="instructor.html";
      }
      if(type==="admin"){
        window.location.href="adminpage.html";
      }
    }
    else{
      loginError.textContent = "Invalid username, password, or type.";
    }    
  });
});