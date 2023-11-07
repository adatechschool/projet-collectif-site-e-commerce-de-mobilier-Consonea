const Admin = require("../models/AdminModel");
const express = require("express");
const adminRouter = express.Router();

//GET ALL admin profiles
adminRouter.get("", async (req, res, next) => {
    try {
        const adminData = await Admin.getAllAdmins();
        res.status(200).json(adminData[0])
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = adminRouter;