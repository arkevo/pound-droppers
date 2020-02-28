// If all required fields are filled

  // Create an object for the user"s data
  var user = {
    email: $("#email").val().trim(),
    password: $("#password").val().trim()
  };

  $.ajax("/api/users", {
    type: "POST",
    data: user
  }).then(function() {
    console.log("created a new user");
    // Reload the page to get the updated list
  
  });

