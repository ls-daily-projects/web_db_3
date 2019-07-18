const { createMany, createRandomInstructionStep } = require("../utils")

exports.seed = knex =>
    knex("instruction_step")
        .del()
        .then(() =>
            knex("instruction_step").insert(
                createMany(createRandomInstructionStep)
            )
        )
