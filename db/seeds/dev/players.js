import players from "../../data/players.js";
import teams from "../../data/teams.js";

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
        if (team.beerStyle === style[0].style_name) {
          return knex("beers").insert({
            name: beer.name,
            abv: beer.abv,
            description: beer.description,
            is_available: beer.availability,
            style_id: style[0].id
          });
        }
      });
      return Promise.all(beerPromises);
    });
};

exports.seed = function(knex, Promise) {
  return knex("teams")
    .del()
    .then(() => knex("players").del())
    .then(() => {
      const stylePromises = styles.map(style => {
        return createStandigs(knex, style);
      });
      return Promise.all(stylePromises);
    })
    .then(() => console.log("Great Success!!"))
    .catch(error => console.log(`Error seeding data: ${error}`));
};
