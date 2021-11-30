const router = require('express').Router();
const Recipe = require('../schemas/recipe-schema');
const verify = require('./verify-token')


//gets all Recipes
router.get('/', verify, async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.json(recipes)
    } catch (err) {
        res.json({message: err})
    }
})


//get a specific recipe
router.get('/:recipeId', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId)
        res.json(recipe)
    } catch (err) {
        res.json({message: err})
    }
})


//creates a new recipe
router.post('/', async (req, res) => {
    const post = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
    })
    try {
        const savedRecipe = await post.save()
        res.json(savedRecipe)
    } catch (err) {
        res.json({message: err})
    }
})

//delete recipes
router.delete('/:recipeId', async (req, res) => {
    try {
        const removeVillain = await Recipe.remove({_id: req.params.recipeId})
        res.json(removeVillain)
    } catch (err) {
        res.json({message: err})
    }
})

//update Recipe
router.patch('/:recipeId', async (req, res) => {
    try {
        const editRecipe = await Recipe.updateOne({_id: req.params.recipeId}, {$set: req.body})
        res.json(editRecipe)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;
