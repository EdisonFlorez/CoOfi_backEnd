import express from 'express';
import User from '../models/user';
const router = express.Router();


router.get('/user', async (req, res)=>{
    const userDB = await User.find();
    res.json(userDB);
});


router.get('/user/:name', async (req, res)=>{
    const userDB = await User.find({name: req.params.name});
    res.json(userDB);
    
});


router.put('/user/:id', async (req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const userDB = await User.findOneAndUpdate(_id, body, {new : true});
        res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            message: "Ocurrió un error",
            error
        })
        console.error(error);
    }
});
   

router.post('/user', async(req, res)=>{
    const body = req.body;
    try {
        const userDB = await User.create(body);
        res.status.json(userDB);
    } catch (error) {
        return res.status(500).json({
            message: "ocurrió un error",
            error
        })
        console.error(error);
    }
});


router.delete("/user/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const userDB = await User.findByIdAndDelete({_id});
        if(!userDB){
            return res.status(400).json({
                mesagge: "No se encontró el id indicado",
                error
            })
        }
        res.json(userDB)
    } catch (error) {
        return res.status(400).json({
            message: "Ocurrió un error. ",
            error
        });
    }
});

module.exports = router;