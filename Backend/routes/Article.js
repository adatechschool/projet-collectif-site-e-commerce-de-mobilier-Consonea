const express = require("express");

const router = express.Router();

const User = require("../controllers/User");
const Article = require("../models/Article");

router.get("/all", Article.getAllArticles);

module.exports = router;
