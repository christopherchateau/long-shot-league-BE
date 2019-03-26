const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);
// const cors = require('cors');

app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(cors({origin: 'http://localhost:8888'}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set("port", process.env.PORT || 3001);

app.get("/api/v1/longshotleague/players", (request, response) => {
  database("players")
    .select()
    .then(visitor => {
      response.status(200).json(visitor);
    });
});

app.post("/api/v1/longshotleague/new_player", (request, response) => {
  const newPlayer = request.body;

  database("players")
    .insert({ ...newPlayer }, "id")
    .then(player => {
      response.status(201).json("new player successfully added!");
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

app.get("/api/v1/longshotleague/teams", (request, response) => {
  database("teams")
    .select()
    .then(visitor => {
      response.status(200).json(visitor);
    });
});

app.post("/api/v1/longshotleague/new_team", (request, response) => {
  const newTeam = request.body;

  database("teams")
    .insert({ ...newTeam }, "id")
    .then(team => {
      response.status(201).json("new team successfully added!");
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

app.listen(app.get("port"), () => {
  console.log(`visitor tracker is running on ${app.get("port")}.`);
});

module.exports = app;