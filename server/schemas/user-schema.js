const mongoose = require( 'mongoose' );

const userSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    lastName: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    phone: {
        type: Number,
        required: false,
        min: 10,
        max: 10,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    },
    birthDate: {
        type: Date,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now()
    }
} );

module.exports = mongoose.model( 'User', userSchema, 'users' );
