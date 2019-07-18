const {
    createMany,
    createRandomRecipe,
    createRandomIngredient,
    createRandomRecipeIngredient,
    createRandomInstruction,
    createRandomInstructionStep
} = require("./data/utils")

console.log(createMany(createRandomInstructionStep))
