exports.up = knex =>
    knex.schema
        .createTable("recipe", tableBuilder => {
            tableBuilder.increments()
            tableBuilder.string("title").notNullable()
            tableBuilder.text("description")
        })
        .createTable("ingredient", tableBuilder => {
            tableBuilder.increments()
            tableBuilder.string("name").notNullable()
        })
        .createTable("recipe_ingredient", tableBuilder => {
            tableBuilder
                .integer("recipe_id")
                .notNullable()
                .references("id")
                .inTable("recipe")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tableBuilder
                .integer("ingredient_id")
                .notNullable()
                .references("id")
                .inTable("ingredient")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tableBuilder
                .float("quantity")
                .notNullable()
                .unsigned()
        })
        .createTable("instruction", tableBuilder => {
            tableBuilder.increments()
            tableBuilder
                .integer("recipe_id")
                .notNullable()
                .notNullable()
                .references("id")
                .inTable("recipe")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tableBuilder.text("notes")
        })
        .createTable("instruction_step", tableBuilder => {
            tableBuilder.increments()
            tableBuilder
                .integer("instruction_id")
                .references("id")
                .inTable("instruction")
                .onUpdate("CASCADE")
                .onDelete("CASCADE")
            tableBuilder.text("content")
        })

exports.down = knex =>
    knex.schema
        .dropTableIfExists("recipe")
        .dropTableIfExists("ingredient")
        .dropTableIfExists("recipe_ingredient")
        .dropTableIfExists("instruction")
        .dropTableIfExists("instruction_step")
