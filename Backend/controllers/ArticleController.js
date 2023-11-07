// newTea function for post tea route
const Article = require("../models/ArticleModel");
const express = require("express");
const articleRouter = express.Router();
const updateRouter = express.Router();

articleRouter.get("", async (req, res, next) => {
  try {
    const articles = await Article.getAllArticles();
    res.status(200).json(articles[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

updateRouter.patch("", async (req, res, next) => {
  try {
    const articles = await Article.updateArticle();
    res.status(200).json(articles[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = articleRouter;
module.exports = updateRouter;
