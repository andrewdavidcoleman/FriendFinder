// vvvvvvvvvvvvvv-dependencies-vvvvvvvvvvvvvvvvvvvvv
var express = require("express");
var bodyParser = require("body-parser");
var path = require ("body-parser");
// ===================================

// vvvvvvvvvvvvvv-express-vvvvvvvvvvvvvvvvvvvvv
var app = express();
var PORT = var PORT = process.env.PORT || 3000;
// ===================================

// vvvvvvvvvvvvvv-data parsing-vvvvvvvvvvvvvvvvvvvvv
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ===================================
