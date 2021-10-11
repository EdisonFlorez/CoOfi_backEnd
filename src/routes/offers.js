import express from "express";
import Offer from "../models/offer";
const router = express.Router();

router.get("/offer", async (req, res) => {
  const offerDB = await Offer.find();
  res.json(offerDB);
});

router.get("/offer/:id", async (req, res) => {
  const _id = req.params.id;
  try {
      const offerDB = await Offer.findOne({ _id });
      res.json(offerDB)
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error",
      error,
    });
  }
});

router.put("/offer/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const offerDB = await Offer.findByIdAndUpdate(_id, body, { new: true });
    res.json(offerDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrió un error",
      error,
    });
    console.error(error);
  }
});

router.post("/offer", async (req, res) => {
  const body = req.body;
  try {
    const offerDB = await Offer.create(body);
    res.status.json(offerDB);
  } catch (error) {
    return res.status(500).json({
      message: "ocurrió un error",
      error,
    });
    console.error(error);
  }
});

router.delete("/offer/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const offerDB = await Offer.findByIdAndDelete({ _id });
    if (offerDB) {
      return res.status(400).json({
        mesagge: "No se encontró el id indicado",
        error,
      });
    }
    res.json(offerDB);
  } catch (error) {
    return res.status(400).json({
      message: "Ocurrió un error. ",
      error,
    });
  }
});

module.exports = router;
