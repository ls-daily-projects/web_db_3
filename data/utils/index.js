const faker = require("faker")

const createMany = (factory, count = 25) => {
    const many = []
    for (let index = 0; index < 25; index++) {
        many.push(factory())
    }
    return many
}

const createRandomRecipe = () => {
    return {
        title: faker.lorem.words(7),
        description: faker.lorem.text(1)
    }
}

const createRandomIngredient = () => {
    return {
        name: faker.commerce.product().toLowerCase()
    }
}

const createRandomRecipeIngredient = () => {
    return {
        recipe_id: faker.random.number({ min: 1, max: 25 }),
        ingredient_id: faker.random.number({ min: 1, max: 25 }),
        quantity: faker.finance.amount(1, 25, 2)
    }
}

const createRandomInstruction = () => {
    return {
        recipe_id: faker.random.number({ min: 1, max: 25 }),
        notes: faker.lorem.text(1)
    }
}

const createRandomInstructionStep = () => {
    return {
        instruction_id: faker.random.number({ min: 1, max: 25 }),
        content: faker.lorem.text(1)
    }
}

module.exports = {
    createRandomRecipe,
    createRandomIngredient,
    createRandomRecipeIngredient,
    createRandomInstruction,
    createRandomInstructionStep,
    createMany
}
