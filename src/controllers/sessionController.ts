"use strict"
import { Request, Response } from "express";
import { User } from "../models/user";
import { compare } from "bcrypt";
import { sign } from 'jsonwebtoken';

const keySecret = 'uiojmn3gbe'


class sessionController{
    async createSession(request: Request, response: Response) {
        const { EMAIL, SENHA } = request.body; 

        const VerifyUser = await User.findOne({
            where: {
                email: EMAIL
            }
        }) 

        if(!VerifyUser)
            return response.status(400).json({
                Mensagem: "User not found"
            }); 

       //const comparePassword = await compare(SENHA, VerifyUser.)

       const TOKEN = sign({}, keySecret, {
        subject: SENHA, 
        expiresIn: "1d"
       })

        return response.status(200).json({Mensagem: "User logged sucessfully", TOKEN: TOKEN})
    }

}


export default new sessionController();