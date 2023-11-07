// newTea function for post tea route
const Article = require("../models/Article");
const express = require("express");
const articleRouter = express.Router();

//GET ALL ENVELOPS
articleRouter.get("", async (req, res, next) => {
  try {
    const articles = await Article.getAllArticles();
    res.status(200).json(articles[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = articleRouter;
