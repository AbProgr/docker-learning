const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! You are in docker world");
});

app.listen(3000, err => {
  console.log("Server up at: http://localhost:3000");
});

// docker run -p 3000:3000 <image>