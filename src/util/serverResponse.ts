import { Response } from "express";

class ServerResponse {

    successMessage(res: Response, code: number, message: String){
        try{
            return res.status(code)
                      .json({status: code, message})
        }catch(error){
            return res.status(code)
                      .json({status: code, message: error})
        }
    }

    successMessageWithPayload(
        res: Response,
        code: number,
        message: String,
        payload: Object
        ){
            try{
                return res.status(code)
                          .json({status: code, message: message, data: payload})

            }catch(error){
                return res.status(code)
                          .json({status: code, message: error})
            }
    }

    errorMessage(res: Response, code: number, message: String){
        try{
            return res.status(code)
                      .json({status: code, message})
        }catch(error){
            return res.status(code)
                      .json({status: code, message})
        }
    }

}

export default new ServerResponse()