const User = require("../models/UserModel");
const express = require("express");
const userRouter = express.Router();

//GET ALL users
userRouter.get("", async (req, res, next) => {
  try {
    const users = await User.getAllUsers();
    res.status(200).json(users[0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// GET USER BY ID
userRouter.get("/:id", async (req, res, next) => {
  try {
    let id = req.params["id"];
    const user = await User.getUserByID(id);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

//POST new user
userRouter.post("", async (req, res, next) => {
  try {
    let {
      first_name,
      last_name,
      username,
      email,
      password
    } = await req.body;
    let user = new User(
      first_name,
      last_name,
      username,
      email,
      password
    );
    await user.saveUser();
    res.status(200).json({ message: "user created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// DELETE AN USER
userRouter.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params["id"];
    await User.deleteUserByID(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = userRouter;
