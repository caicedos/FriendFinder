var friendsData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsData)
  });


  app.post("/api/friends", function (req, res) {
    var user = req.body;

    var userScores = user.scores

    var matchIndex = 0;
    var difference = 100;

    friendsData.forEach(function (value, i) {

      var apiData = value.scores;
      var surveyInput = userScores;
      var userId = i;

      totalDifference = 0;

      for (var i = 0; i < apiData.length; i++) {
        totalDifference += Math.abs(apiData[i] - surveyInput[i]);
      }

      console.log(userId)
      console.log("---------------------------------------------");
      
      console.log(totalDifference)
      console.log("---------------------------------------------");

      if (totalDifference < difference) {
        matchIndex = userId;
        difference = totalDifference;
      }

    });

    friendsData.push(user);

    res.json(friendsData[matchIndex]);

  });
}