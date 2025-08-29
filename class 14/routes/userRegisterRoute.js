import express from "express";
import { registerUser } from "../controllers/userController.js";
import { loginUser } from "../controllers/userController.js";

const routeRegister = express.Router();
const routeLogin = express.Router();
// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public


routeRegister.post("/", registerUser);
routeLogin.post ("/", loginUser);

export {routeRegister, routeLogin};