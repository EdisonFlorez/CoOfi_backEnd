import express from 'express';
const router = express.Router();
 
import User from '../models/user';

router.get('/user', async (req, res)=>{
    const user = await User.find();
    res.json(user);
    console.log(user);
});


router.get('/user/:name', async (req, res)=>{
    const user = await User.find({name : req.params.name });
    res.json(user);
    console.log(user);
});
/*
router.put('/user/:name', async (req, res)=>{
    const name = req.params.name;
    const body = req.body;
    try
*/

router.put('/user/:name', async (req, res)=>{
    const name = req.params.name;
    const body = req.body;
   
        const user = await User.updateOneAndUpdate({name : req.params.name},
            {$set: {               
    last_name : req.params.last_name,
    user : req.params.user,
    password :  req.params.password,
    identification : req.params.identification,
    contact_number : req.params.contact_number,
            }},{upsert:true});

res.json(resultado);
   
    console.log(user);
});

router.post('/user', async(req, res)=>{
    const body = req.body;
    try {
        const userDB = await User.create(body);
        res.status.JSON(userDB);
    } catch (error) {
        return res.status(500).json({
            message : "ocurrió un error",
            error
        })
        console.error(error);
    }
});

module.exports = router;