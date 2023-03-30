const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser"); // add body-parser module

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true })); // use body-parser

app.get("/", (req, res) => {
  res.render("loginfirst");
});


app.get("/login", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;

  if (name === "admin" && password === "admin") {
    res.render("success", {
      username: name,
    });
  } else {
    res.render("failure");
  }
});

app.get("/about", (req, res) => {
  res.render("about", { title: "Hey", message: "The file is getting rendered" });
});


app.listen(process.env.PORT || 3013, () => { 
  console.log("Running at Port 3013");
});
