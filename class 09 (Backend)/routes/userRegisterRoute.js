import express from "express"
import { register } from "../controllers/userController.js";

const userRegister =  express.Router()

userRegister.post ('/register' , register)


export{userRegister};