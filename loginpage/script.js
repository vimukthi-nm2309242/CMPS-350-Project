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

    usernameError.textContent = "";
    passwordError.textContent = "";
    loginError.textContent = "";

    let hasError = false;  //this acts as a flag so itll reset the entire login page


    if(!username ||!password){
      loginError.textContent = "Fill in all fields.";
      hasError = true;
    }
    if (!username) {
      loginError.textContent = "Username is required.";
      hasError = true;
    }
    if (!password) {
      loginError.textContent = "Password is required.";
      hasError = true;
    }
    if (hasError) return;

    const response = await fetch("users.json");
    const users = await response.json();

    const detail = users.find(u => 
      u.username === username &&
      u.password === password &&
      u.type === type
    );

    if(detail){

      localStorage.setItem('currentUser',username);   //saves username into local storage which can be used for registration

      if(type==="student"){
        window.location.href = "../student_pages/studentdashboard.html";
      }
      // else if(type==="instructor"){
      //   window.location.href="https://www.youtube.com/";
      // }
      // else if(type==="admin"){
      //   window.location.href="https://www.google.com/";
      // }
    }
    else{
      loginError.textContent = "Invalid username, password, or type.";
    }    
  });
});