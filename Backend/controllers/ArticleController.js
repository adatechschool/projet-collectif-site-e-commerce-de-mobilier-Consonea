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

articleRouter.patch("/:id", async (req, res, next) => {
  try {
    await Article.updateArticle(req.params["id"],req.body);
    res.status(200).json({ message: "article updated" });
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
});

// GET ARTICLE BY TYPE
articleRouter.get("/type/:type", async (req, res, next) => {
  try {
    let type = req.params["type"];
    const articleByType = await Article.getArticleByType(type);
    res.status(200).json(articleByType);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET ARTICLE BY USER
articleRouter.get("/user/:user_id", async (req, res, next) => {
  try {
    let user_id = req.params["user_id"];
    const articlesByUser = await Article.getArticlesByUser(Number(user_id));
    res.status(200).json(articlesByUser[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// ADD A NEW ARTICLE
articleRouter.post("", async (req, res, next) => {
  try {
    let {
      name,
      type,
      colors,
      price,
      height,
      width,
      depth,
      description,
      status,
      quantity,
      user_id,
    } = await req.body;
    let article = new Article(
      name,
      type,
      colors,
      price,
      height,
      width,
      depth,
      description,
      status,
      quantity,
      user_id
    );
    await article.saveArticle();
    res.status(200).json({ message: "article created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// DELETE AN ARTICLE
articleRouter.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params["id"];
    await Article.deleteArticleByID(id);
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = articleRouter;
