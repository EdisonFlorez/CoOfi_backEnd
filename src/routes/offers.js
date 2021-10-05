const express = require('express');
const router = express.Router();

const Offers = require('../models/Offers');

router.get('/', async (req,res) => {
    //res.send('API task is goes here')
    const tasks = await Offers.find();
    //console.log(tasks); // aqui van todos los datos
    res.json(tasks);
});

router.post('/', async (req,res)=>{
    // req es toda la informacion que me envia el navegador al servidor
    //new Task()
    //console.log(new Task());
    // console.log(req.body);
    // res.json('recived');
    const task = new Offers(req.body);
    await task.save();
    res.json({
        status: "Guardado"
    });

});

// id de tarea:
router.put('/:id',async(req,res) =>{
    //const rep = req.params
    console.log(req.params.id);
    await Offers.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "Actualizado"
    });

});

router.delete('/:id', async(req, res) =>{
    await Offers.findByIdAndRemove(req.params.id);
    res.json({
        status: "Borrado"
    });
});


module.exports = router;