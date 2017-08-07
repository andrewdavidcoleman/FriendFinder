// dependencies
var path = require("path");
// ===================================

module.exports = function(app) {
  // displays survery page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  // ===================================


  // vvvvvvvvvvvvvv-default to home-vvvvvvvvvvvvvvvvvvvvv
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  // ===================================
};
