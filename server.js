const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const database = require("knex")(config);

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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

// app.post("/api/v1/longshotleague/new_player", (request, response) => {
//   const newPlayer = request.body;

//   database("players")
//     .insert({ ...newPlayer }, "id")
//     .then(player => {
//       response.status(201).json("new player successfully added!");
//     })
//     .catch(error => {
//       response.status(500).json({ error: error.message });
//     });
// });

app.get("/api/v1/longshotleague/teams", (request, response) => {
  database("teams")
    .select()
    .then(visitor => {
      response.status(200).json(visitor);
    });
});

// app.post("/api/v1/longshotleague/new_team", (request, response) => {
//   const newTeam = request.body;

//   database("teams")
//     .insert({ ...newTeam }, "id")
//     .then(team => {
//       response.status(201).json("new team successfully added!");
//     })
//     .catch(error => {
//       response.status(500).json({ error: error.message });
//     });
// });

app.patch("/api/v1/longshotleague/team/", (request, response) => {
  let teamData = request.body;
  {
    database("teams")
      .where("name", teamData.name)
      .update({ points: teamData.points })
      .update({ is_eliminated: teamData.is_eliminated })
      .then(numEdited => {
        if (numEdited !== 0) {
          response
            .status(202)
            .json(`Total of ${teamData.name} sucessfully updated!`);
        }
      })
      .catch(error => {
        response.status(500).json({ error: error.message });
      });
  }
});

app.post("/api/v1/longshotleague/new_bonus/", (request, response) => {
  let bonusData = request.body;

  database("bonus")
    .insert({ ...bonusData }, "id")
    .then(bonus => {
      response.status(201).json("new bonus successfully added!");
    })
    .catch(error => {
      response.status(500).json({ error: error.message });
    });
});

app.listen(app.get("port"), () => {
  console.log(`longshot league is running on ${app.get("port")}.`);
});

module.exports = app;
