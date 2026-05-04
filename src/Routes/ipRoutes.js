const express = require("express");
const router = express.Router();
const ipController = require("../Controllers/ipController");
const {ipValidator,validate} = require("../Validators/ipValidator");

router.post("/getloc",ipValidator,validate,ipController.getLoc);


module.exports = router;