const router = require( 'express' ).Router();
const Recipe = require( '../schemas/recipe-schema' );
const verify = require( './verify-token' );


//gets all Recipes
router.get( '/', async ( req, res ) => {
    try {
        const recipes = await Recipe.find();
        const showPublicRecipes = recipes.filter( recipe => recipe.publicRecipe === false );
        res.json( showPublicRecipes );
    } catch ( err ) {
        res.json( { message: err } );
    }
} );

//get a recipes by user
router.get( '/findByAuthor/:author', async ( req, res ) => {
    try {
        const recipes = await Recipe.find( { 'author': req.params.author} );
        res.json( recipes );
    } catch ( err ) {
        res.json( { message: err } );
    }
} );


//get a specific recipe
router.get( '/:recipeId', async ( req, res ) => {
    try {
        const recipe = await Recipe.findById( req.params.recipeId );
        if ( recipe.publicRecipe ) {
            res.json( recipe );
        } else {
            return res.status( 400 ).send( 'This recipe is private' );
        }
    } catch ( err ) {
        res.json( { message: err } );
    }
} );

//creates a new recipe
router.post( '/', verify, async ( req, res ) => {
    const post = new Recipe( {
        author: req.body.author,
        name: req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        publicRecipe: req.body.publicRecipe
    } );
    try {
        const savedRecipe = await post.save();
        res.json( savedRecipe );
    } catch ( err ) {
        res.json( { message: err } );
    }
} );

//delete recipes
router.delete( '/:recipeId', async ( req, res ) => {
    try {
        const removeVillain = await Recipe.deleteOne( { _id: req.params.recipeId } );
        res.json( removeVillain );
    } catch ( err ) {
        res.json( { message: err } );
    }
} );

//update Recipe
router.patch( '/:recipeId', async ( req, res ) => {
    try {
        const editRecipe = await Recipe.updateOne( { _id: req.params.recipeId }, { $set: req.body } );
        res.json( editRecipe );
    } catch ( err ) {
        res.json( { message: err } );
    }
} );

module.exports = router;
