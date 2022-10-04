"use strict"
import { sequelize } from '../database/conect'; 
import {User} from '../models/user'
import { Request, Response } from 'express';
import { hash, compare } from 'bcrypt';
const salt = 10; 



class UserController {
    async create(request: Request, response: Response) {
        const { NAME, SENHA, EMAIL } = request.body; 

        if(!NAME || !EMAIL || !SENHA )
            return response.status(400).json({Mensage: "Dados inválidos, todos campos devem ser preenchidos correctamente"});

        const USER = await User.findOne({
            where: {
                email: EMAIL
            }
        })

        if(USER) 
            return response.status(200).json({Mensagem: "Email utilizado por outro usuario, insira um outro email"})
        
        const PASSENCRIPTED = await hash(SENHA, salt);
       
        try {
            const NEWUSER = await User.create({
                name: NAME, 
                password: PASSENCRIPTED, 
                email: EMAIL
            });

            return response.status(201).json({
                Mensagem: "User created sucessfuly", 
                NEWUSER, 
            });
       } catch (error: any) {
            return response.status(400).json({Error: error.message})
       }

        
    }
}

export default new UserController();
