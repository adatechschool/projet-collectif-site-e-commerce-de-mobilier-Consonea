const express = require("express");

const router = express.Router();

const User = require("../controllers/User");

router.get("/all", User.getAllUsers);

module.exports = router; 