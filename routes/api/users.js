var router = require("express").Router();
var models = require('../../models'); 
var User = models.User; 


  router.post("/", async (req, res) => {
    const result = await User.create(req.body);
    res.json(result);
  });

  router
  .route("/")
  .get(async (req, res) => {
    const user = await User.findAll();
    res.json({ user: user });
  });

  module.exports = router;
  
// app.post("/api/friends", function(req, res) {
//     // Note the code here. Our "server" will respond to a user"s survey result
//     // Then compare those results against every user in the database.
//     // It will then calculate the difference between each of the numbers and the user"s numbers.
//     // It will then choose the user with the least differences as the "best friend match."
//     // In the case of multiple users with the same result it will choose the first match.
//     // After the test, it will push the user to the database.

//     // We will use this object to hold the "best match". We will constantly update it as we
//     // loop through all of the options
//     var bestMatch = {
//       name: "",
//       photo: "",
//       friendDifference: Infinity
//     };

//     // Here we take the result of the user"s survey POST and parse it.
//     var userData = req.body;
//     var userScores = userData.scores;

//     // This variable will calculate the difference between the user"s scores and the scores of
//     // each user in the database
//     var totalDifference;

//     // Here we loop through all the friend possibilities in the database.
//     for (var i = 0; i < friends.length; i++) {
//       var currentFriend = friends[i];
//       totalDifference = 0;

//       console.log(currentFriend.name);

//       // We then loop through all the scores of each friend
//       for (var j = 0; j < currentFriend.scores.length; j++) {
//         var currentFriendScore = currentFriend.scores[j];
//         var currentUserScore = userScores[j];

//         // We calculate the difference between the scores and sum them into the totalDifference
//         totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
//       }

//       // If the sum of differences is less then the differences of the current "best match"
//       if (totalDifference <= bestMatch.friendDifference) {
//         // Reset the bestMatch to be the new friend.
//         bestMatch.name = currentFriend.name;
//         bestMatch.photo = currentFriend.photo;
//         bestMatch.friendDifference = totalDifference;
//       }
//     }

//     // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
//     // the database will always return that the user is the user's best friend).
//     friends.push(userData);

//     // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
//     res.json(bestMatch);
//   });




