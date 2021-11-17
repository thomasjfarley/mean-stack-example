const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const recipeRoute = require('./routes/recipes')

app.use('/recipes', recipeRoute)


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Welcome to the cookbook!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
