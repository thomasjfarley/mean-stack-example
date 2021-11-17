const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('recipe', RecipeSchema, 'my-recipes')
