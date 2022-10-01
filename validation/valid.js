import {body} from 'express-validator';

let valides = {
    auth: [
        body('nick').isLength({min: 3, max: 12}),
        body('email').isEmail(),
        body('password').isLength({min:6,max:24})
    ]
}

export default valides