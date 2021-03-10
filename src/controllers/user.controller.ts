import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt"
import { getRepository } from "typeorm";

import User from "../models/userModel";
import serverResponse from "../util/serverResponse";


export const  registerUser = async (req: Request, res: Response, next: NextFunction)=>{
    try{
        const userPayload = req.body
        const hashPassword = await bcrypt.hash(userPayload.password, 10)

        let user = new User()
        user.userName = userPayload.userName 
        user.email = userPayload.email
        user.password = userPayload.password

        // const user = await getRepository(User).create({
        //     ...userPayload,
        //     password: hashPassword
        // })

        await getRepository(User).save(user)

        serverResponse.successMessageWithPayload(res, 201, "registered successfully!", user)

    }catch(error){
        next(error)
    }
}