// newTea function for post tea route
const Article = require("../models/ArticleModel");
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

//ADD A NEW ARTICLE
articleRouter.post('', async (req, res, next) => {
  try {
    let { name,
      type,
      colors,
      price,
      height,
      width,
      depth,
      description,
      status,
      quantity,
      user_id } = await req.body;
    let article = new Article(name,
      type,
      colors,
      price,
      height,
      width,
      depth,
      description,
      status,
      quantity,
      user_id);
    await article.saveArticle();
    res.status(200).json({ message: "article created" });
  }
  catch (error) {
    console.log(error);
    next(error);
  }

})

module.exports = articleRouter;
