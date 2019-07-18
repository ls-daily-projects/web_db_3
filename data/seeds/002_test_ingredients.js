const { createMany, createRandomIngredient } = require("../utils")

exports.seed = knex =>
    knex("ingredient")
        .del()
        .then(() =>
            knex("ingredient").insert(createMany(createRandomIngredient))
        )
