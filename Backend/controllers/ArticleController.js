const Article = require("../models/ArticleModel");
const express = require("express");
const articleRouter = express.Router();

// GET ALL ARTICLES
articleRouter.get("", async (req, res, next) => {
  try {
    const articles = await Article.getAllArticles();
    res.status(200).json(articles[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET ARTICLE BY ID
articleRouter.get("/:id", async (req, res, next) => {
  try {
    let id = req.params["id"];
    const articleById = await Article.getArticleByID(id);
    res.status(200).json(articleById);
  } catch (error) {
    console.log(error);
    next(error);
  }
})

module.exports = articleRouter;
