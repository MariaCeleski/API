const express = require("express");
const res = require("express/lib/response");

const app = express();

app.listen("3000");
//usar insomnia

//MÉTODO GET
// app.route("/").get((req, res) => res.send("hello"));
// app.route("/sobre").get((req, res) => res.send("hello sobre"));

//MÉTODO POST
//middleware = app.use(express.json());

//app.use(express.json());
//app.route("/").post((req, res) => res.send(req.body));

//MÉTODO PUT

app.use(express.json()); //middleware

let author = "Maria";

app.route("/").get((req, res) => res.send(author));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});
