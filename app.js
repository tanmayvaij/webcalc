const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home", { sum: null });
});

app.post("/", (req, res) => {
  let sum = Number(req.body["num1"]) + Number(req.body["num2"]);
  res.render("home", { sum });
});

app.listen(5000, () => {
  console.log("Server started successfully");
});
