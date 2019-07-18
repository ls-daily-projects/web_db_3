const { createMany, createRandomRecipeIngredient } = require("../utils")

exports.seed = knex =>
    knex("recipe_ingredient")
        .del()
        .then(() =>
            knex("recipe_ingredient").insert(
                createMany(createRandomRecipeIngredient)
            )
        )
