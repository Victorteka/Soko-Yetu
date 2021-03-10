import express, { Application } from "express";
import cors from "cors"
import logger from "morgan"
import { homeRouter, notFound } from "./routes/home.route";
import { BASE_URL } from "./util/constants";
import { DBConnect } from "./util/dbConnection";
import { userRegister } from "./routes/user.route";

class App {
    
   public app: Application

    constructor(){
        this.app = express()
        this.config()
        DBConnect().then(async ()=>{
            this.app
        })
    }

    private config(): void{
        this.app.use(express.json())
        this.app.use(cors())

        if(process.env.NODE_ENV === "development"){
            this.app.use(logger("dev"))
        }
        //routes
        this.app.use(BASE_URL, homeRouter)
        this.app.use(BASE_URL, notFound)
        this.app.use(BASE_URL, userRegister)
    }
    
}

export default new App().app