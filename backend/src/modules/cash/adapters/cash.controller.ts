import {validateError} from "../../../kernel/error_codes";
import {ResponseApi} from "../../../kernel/types";
import {Request, Response} from "express";

export class CashController{


    static namefunciton = async (req:Request, res:Response) : Promise<Response> => {
        try {

            //payload


            //repository

            //interactor

            //exec


            //response api
            const body = {
                code: 200,
                error: false,
                message: 'Ok',
                data: 'test'
            }
            return res.status(body.code).json(body)
        } catch (e) {
            const error = validateError(e as Error)
            return res.status(error.code).json(error)
        }
    }
}