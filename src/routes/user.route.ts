import { Router } from "express";
import { registerUser } from "../controllers/user.controller";


export const userRegister = Router()

//Register user 
userRegister.post("/auth/sign-up", registerUser)