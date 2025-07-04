const express = require("express");
const { logoutUser, registeredUser, loginUser } = require("../controllers/authControlls");
const authRoutes = express.Router();
authRoutes.post("/register", registeredUser);
authRoutes.post("/login", loginUser);
authRoutes.post("/logout", logoutUser);


module.exports = authRoutes;
