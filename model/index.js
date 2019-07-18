const db = require("../data")

const getRecipes = () => {
    return db("recipe")
}

const getShoppingList = recipeId => {
    return db("recipe")
        .innerJoin(
            "recipe_ingredient",
            "recipe.id",
            "recipe_ingredient.recipe_id"
        )
        .innerJoin(
            "ingredient",
            "ingredient.id",
            "recipe_ingredient.ingredient_id"
        )
        .where("recipe.id", recipeId)
}

const getInstructions = recipeId => {
    return db("instruction")
        .innerJoin("recipe", "instruction.recipe_id", "recipe.id")
        .where("recipe.id", recipeId)
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
