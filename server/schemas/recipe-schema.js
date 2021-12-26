const mongoose = require( 'mongoose' );

const RecipeSchema = mongoose.Schema( {
    author: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    ingredients: [ {
        ingredient: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        }
    } ],
    directions: [ {
        step: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    } ],
    date: {
        type: Date,
        default: Date.now()
    },
    publicRecipe: {
        type: Boolean,
        required: true
    },
    mealRating: Number,
    simplicityRating: Number,
} );


module.exports = mongoose.model( 'recipe', RecipeSchema, 'recipes' );
