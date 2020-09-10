const express = require("express");
const router = express.Router();

const montyHallController = require("./controllers/montyHallController");
router.get("/api/montyhall", montyHallController.index);

module.exports = router;
