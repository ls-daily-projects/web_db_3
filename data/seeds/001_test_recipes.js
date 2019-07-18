const { createMany, createRandomRecipe } = require("../utils")

exports.seed = knex =>
    knex("recipe")
        .del()
        .then(() => knex("recipe").insert(createMany(createRandomRecipe)))
