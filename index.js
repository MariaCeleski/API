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

// app.use(express.json()); //middleware

// let author = "Maria";

// app.route("/").get((req, res) => res.send(author));

// app.route("/").put((req, res) => {
//   author = req.body.author;
//   res.send(author);
// });

//MÉTODO DELETE

let author = "Maria";
app.route("/:identificador").delete((req, res) => {
  res.send(req.params.identificador);
});

//PARAMETROS
app.route("/").get((req, res) => res.send(req.query.name));
app.route("/").put((req, res) => res.send(req.body.author));
app.route("/:parametro").get((req, res) => res.send(req.params.parametro));
