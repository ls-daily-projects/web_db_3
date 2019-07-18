const express = require("express")

const { getRecipes, getShoppingList, getInstructions } = require("./model")

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.get("/api/recipes", async (_req, res, next) => {
    try {
        const recipes = await getRecipes()
        res.json(recipes)
    } catch (error) {
        next(error)
    }
})

app.get("/api/recipes/:recipeId", async (req, res, next) => {
    try {
        const recipe = await getShoppingList(req.params.recipeId)
        res.json(recipe)
    } catch (error) {
        next(error)
    }
})

app.get("/api/recipes/:recipeId/instructions", async (req, res, next) => {
    try {
        const recipe = await getInstructions(req.params.recipeId)
        res.json(recipe)
    } catch (error) {
        next(error)
    }
})

app.use((req, _res, next) => {
    const { method, path } = req
    const msg = `${method} ${path} has not been implemented.`
    const err = Error(msg)
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    if (req.headerSent) return next(err)

    res.status(err.status || 500).json({ name: err.name, message: err.message })
})

app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`))
