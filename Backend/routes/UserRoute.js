const express = require("express");

const router = express.Router();

const User = require("../controllers/UserController");

router.get("/all", User.getAllUsers);

module.exports = router; 