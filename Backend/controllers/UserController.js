// newTea function for post tea route
const User = require("../models/UserModel");
const express = require("express");
const userRouter = express.Router();

//GET ALL ENVELOPS
userRouter.get("", async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = userRouter;
