import { Response, Router } from "express";
import ServerResponse from "../util/serverResponse";


export const homeRouter = Router()

homeRouter.get("/", (_, res: Response)=>{

    ServerResponse.successMessage(res, 200, "welcome to Soko yetu API")

})

export const notFound = Router()

notFound.get("*", (_, res: Response)=>{
    ServerResponse.errorMessage(res, 404, "resource not found!")
})
