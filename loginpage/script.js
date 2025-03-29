document.addEventListener("DOMContentLoaded", function(){


  // const form = document.querySelector("login-form");
  // const username = document.querySelector("username");
  // const pw = document.querySelector("password");
  // const type = document.querySelector("form-input").value;
  const signin = document.querySelector("#submitButton");


  signin.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "../pages/studentdashboard.html";
  });


});