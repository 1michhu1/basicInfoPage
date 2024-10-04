const express = require('express')
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const app = express()
app.use(express.static(assetsPath));


const links = [
    { href: "/", text: "Home" },
    { href: "about", text: "About" },
  ];

const users = ["Rose", "Cake", "Biff"];


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!", links:links, users:users });
  });

app.get("/about", (req, res) => {
    res.render("about", { message: "yep it's me!!!", links:links, users:users });

})

app.listen(8080)
