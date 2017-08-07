

// vvvvvvvvvvvvvv-displays survery page-vvvvvvvvvvvvvvvvvvvvv
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/surey.html"));
});
// ===================================


// vvvvvvvvvvvvvv-default to home-vvvvvvvvvvvvvvvvvvvvv
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/home.html"));
});
// ===================================
