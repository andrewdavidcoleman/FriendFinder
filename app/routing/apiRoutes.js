//gets our friend data from the friends.js file
var friendData = require("../data/friendData");
// ===================================

module.exports = function(app) {
  // displays JSON of all possible friends
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });
  // ===================================

  // incoming survery results go here
  app.post("/api/friends", function(req, res) {
    friendData.push(req.body);
    res.json(true);
  });
  // ===================================
};
