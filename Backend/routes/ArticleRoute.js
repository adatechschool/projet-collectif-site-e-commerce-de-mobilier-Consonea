const express = require("express");

const router = express.Router();

const User = require("../controllers/UserController");
const Article = require("../models/ArticleModel");

router.get("/all", Article.getAllArticles);

module.exports = router;
