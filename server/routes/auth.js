const router = require( 'express' ).Router();
const User = require( '../schemas/user-schema' );
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const { registerValidation, loginValidation } = require( '../validation' );


router.post( '/register', async ( req, res ) => {
    //validate the data
    const { error } = registerValidation( req.body );
    if ( error ) return res.status( 400 ).send( error.details[ 0 ].message );
    
    //check if user already exists
    const emailExists = await User.findOne( { email: req.body.email } );
    if ( emailExists ) return res.status( 400 ).send( 'Email already exists' );
    
    //Hash passwords
    const salt = await bcrypt.genSalt( 10 );
    const hashPassword = await bcrypt.hash( req.body.password, salt );
    
    const user = new User( {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: hashPassword,
        birthDate: req.body.birthDate,
    } );
    try {
        const savedUser = await user.save();
        res.send( { user: savedUser._id } );
    } catch ( err ) {
        res.status( 400 ).send( err );
    }
} );

router.post( '/login', async ( req, res ) => {
    //validate the data
    const { error } = loginValidation( req.body );
    if ( error ) return res.status( 400 ).send( error.details[ 0 ].message );
    
    //check if email exists
    const user = await User.findOne( { email: req.body.email } );
    if ( !user ) return res.status( 400 ).send( 'Email or password is incorrect' );
    
    //check is password is correct
    const validPass = await bcrypt.compare( req.body.password, user.password );
    if ( !validPass ) return res.status( 400 ).send( 'Email or password is incorrect' );
    
    //create and assign a token
    const token = jwt.sign( { _id: user._id }, process.env.TOKEN_SECRET );
    // res.send(user);
    res.header( 'auth-token', token ).send( token );
} );

module.exports = router;

