const players = require("../../data/players.js");
const teams = require("../../data/teams.js");

const createStandings = (knex, player) => {
  return knex("players")
    .insert(
      {
        name: player.name,
        bonus_points: player.bonus
      },
      ["name", "id"]
    )
    .then(player => {
      let teamPromises = teams.map(team => {
        if (team.draftedBy === player[0].name) {
          return knex("teams").insert({
            name: team.name,
            drafted_by: player[0].name,
            points: team.points,
            is_eliminated: team.eliminated,
            player_id: player[0].id
          });
        }
      });
      return Promise.all(teamPromises);
    });
};

exports.seed = function(knex, Promise) {
  return knex("teams")
    .del()
    .then(() => knex("players").del())
    .then(() => {
      const playerPromises = players.map(player => {
        return createStandings(knex, player);
      });
      return Promise.all(playerPromises);
    })
    .then(() => console.log("Great Success!!"))
    .catch(error => console.log(`Error seeding data: ${error}`));
};
