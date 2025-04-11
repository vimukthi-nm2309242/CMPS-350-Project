# Report for Phase 1 of Web Development Porject
-----------------------------------------------

1. Use case 1
   - Creation of login page
   - Contains validations for username, password and the type.
   - When right information is entered then it takes user to dedication webpage based on their "type".

2. Use case 2
   - creation of search bar (works successfully!). 
   - User can search for course name or by course type such as "programming, engineering, etc."
   - the search button present helps to render the final state of the webpage based on user criteria
   - when erases keywords in search field and clicks the button then it will re-render the original state.

3. Use case 3
   - Implemented registration system
   - Loads the logged in user data from local storage
   - When user clicks on the register button it displays appropriate message
   - However, requires functions to work with admin page such as "approval feature"
   - Needs data persistence system because when user clicks different course to register it does not work as expected.
  
4. Use case 4
   - Created the report basically
   - This displays the courses student has successfully completed, courses in progress and the pending courses.
   - When student is in registration page, beside the search bar there is a button which takes them to the page which displays all that info.
   - This works properly as it reads from the json files
   - However the pending courses require the implementation of persistence to make it work properly.

