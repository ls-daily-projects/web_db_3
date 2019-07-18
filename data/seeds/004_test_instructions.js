const { createMany, createRandomInstruction } = require("../utils")

exports.seed = knex =>
    knex("instruction")
        .del()
        .then(() =>
            knex("instruction").insert(createMany(createRandomInstruction))
        )
