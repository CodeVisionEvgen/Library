import express, {Router} from 'express';
import valides from '../validation/valid.js';
import {validationResult} from 'express-validator';

let router = Router();
router
.get('/',async (req,res)=>{
    res.json({
        test: 'OK'
    })
})
.post('/api/signup',valides.auth,(req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.send("Невірний логін або пароль")
        }
    } catch (error) {
        console.log(error)
    }
})
.use('/public', express.static('./my-app/public'))

export default router;