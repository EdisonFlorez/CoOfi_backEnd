import express from "express";
import User from "../models/user";
const router = express.Router();

router.get("/user", async (req, res) => {
  let userDB = await User.find();
  res.json(userDB);
});

router.get("/user/:id", async (req, res) => {
    let _id = req.params.id
  try {
      let userDB = await User.findOne({_id});
      res.json(userDB);
      
  } catch (error) {
    return res.status(500).json({
        message: "Ocurrió un error",
        error
    })    
  }
});

router.put("/user/:id", async (req, res) => {
  let _id = req.params.id;
  let body = req.body;
  try {
    let userDB = await User.findOneAndUpdate(_id, body, { new: true });
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrió un error",
      error,
    });
    console.error(error);
  }
});

router.post("/user", async (req, res) => {
  let body = req.body;
  try {
    let userDB = await User.create(body);
    res.status.json(userDB);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
      error,
    });
    console.error(error);
  }
});

router.delete("/user/:id", async (req, res) => {
  let _id = req.params.id;
  try {
    let userDB = await User.findByIdAndDelete({ _id });
    if (!userDB) {
      return res.status(400).json({
        mesagge: "No se encontró el id indicado",
        error,
      });
    }
    res.json(userDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrió un error. ",
      error,
    });
  }
});

module.exports = router;
