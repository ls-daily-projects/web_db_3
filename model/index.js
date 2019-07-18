const db = require("../data")

const getRecipes = () => {
    return db("recipe")
}

const getShoppingList = async recipeId => {}
const getInstructions = async recipeId => {}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}
