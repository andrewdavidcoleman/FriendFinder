// vvvvvvvvvvvvvv-dependencies-vvvvvvvvvvvvvvvvvvvvv
var express = require("express");
var bodyParser = require("body-parser");
var path = require ("body-parser");
// ===================================

// vvvvvvvvvvvvvv-express-vvvvvvvvvvvvvvvvvvvvv
var app = express();
var PORT = process.env.PORT || 3000;
// ===================================

// vvvvvvvvvvvvvv-data parsing-vvvvvvvvvvvvvvvvvvvvv
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ===================================

// vvvvvvvvvvvvvv-directs to our routing files-vvvvvvvvvvvvvvvvvvvvv
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// ===================================



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
