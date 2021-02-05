// enable jquerry allow it to run on page
$(document).ready(function() {
  // Getting references to our form and inputs
  // point to id's and elements in html and assign them variable
  // make the variable log in the value of the login input inside of form
  var loginForm = $("form.login");
  // make the variable email input equal to the user input associated with email-input
  var emailInput = $("input#email-input");
  // make the var pass word input equal to the user input of password input
  var passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  // When targeting the log in input data on submission preform a function
  // on the parameter event prevent the defualt function *
  // create avariable email with the key of eamil and make the value the input value of email Input.
  // reprete for password
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
// ???
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    // create loginUser with 2 params, userData.email, usesr Data.password.
    // have userData.email equal the value of email input value
    // do the same for password Input

    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  // function takes in two params email and password
  // Post adds a data to the rout. 
  // the data being passed are the keys of email & password with the value of whatever the value of params email & password
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })

    // reload page with new pathway value into hash which disables the back button
    // there fore
      .then(function() {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
