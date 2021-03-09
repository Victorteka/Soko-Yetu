import { Response, Router } from "express";


export const homeRouter = Router()

homeRouter.get("/", (_, res: Response)=>{
    res.status(200)
        .json({
            status: "success",
            message: "welcome to Soko yetu API"
        })
})

export const notFound = Router()

notFound.get("*", (_, res: Response)=>{
    res.status(404)
        .json({
            status: "error",
            message: "resource not found in our server."
        })
})
