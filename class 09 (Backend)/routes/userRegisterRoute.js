import express from "express";
import { registerUser } from "../controllers/userController.js";

const routeRegister = express.Router();

// @route   POST /api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

export {routeRegister};