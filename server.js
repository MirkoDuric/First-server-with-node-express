const express = require("express");
const res = require("express/lib/response");
const app = express();
app.get("/", function (request, response) {
  response.send("Hello");
});
app.get("/about", function (req, res) {
  res.send(
    "My name is Mirko, I'm from Bosnia but I live in München at the moment. I hope to find a job as Front End developer soon."
  );
});
app.get("/contact", function (req, res) {
  res.send("Contact me at: mirkodjuricczv@gmail.com");
});
app.get("/hobbies", function (req, res) {
  res.send("Football, Basketball, Coding");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
