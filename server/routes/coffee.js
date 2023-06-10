const express = require("express");
const router = express.Router();

const Coffee = require("../models/Coffee");

router.get("/", (req, res) => {
  Coffee.find()
    .sort({ data: -1 })
    .then((coffee) => res.json(coffee))
    .catch((err) => res.status(404).json({ notFound: "no coffee found" }));
});

module.exports = router;
