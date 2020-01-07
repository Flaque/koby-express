var express = require("express");
var app = express();

app.use(express.json());

// Listens for POST "/new-room"
app.post("/new-room", function(req, res) {
  console.log(req.body); // Prints out the JSON
  res.send("check your console");
});

// Start the server
app.listen(3000, () => console.log(`App running at http://localhost:3000`));
