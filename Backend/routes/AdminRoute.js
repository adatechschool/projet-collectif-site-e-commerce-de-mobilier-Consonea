const express = require("express");

const router = express.Router();

const Admin = require("../models/AdminModel");

router.get("/all", Admin.getAllAdmins);

module.exports = router; 