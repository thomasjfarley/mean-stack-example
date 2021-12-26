const express = require('express');
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the recipe book')
})

//Import Routes
const recipeRoute = require('./routes/recipes')
const authRoute = require('./routes/auth')
const imageRoute = require('./routes/images')

//Route Middleware
app.use('/api/recipes', recipeRoute)
app.use('/api/user', authRoute)
app.use('/api/images', imageRoute)


mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Welcome to the cookbook!')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
