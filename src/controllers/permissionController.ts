import { CreatePermissions } from '../models/createPermission';
import { Request, Response} from 'express';


class Permission { 
    
    async CreatePermission(request: Request, response: Response){
        const {name, description} = request.body; 

        const existPermission = await CreatePermissions.findOne({
            where: {
                name: name
            }
        })
        if (existPermission){
            return response.status(400).json({Message: "Permissão já existente"});
        }

        try{
            const NEWPERMISSION = await CreatePermissions.create({
                name, 
                description
            })

            return response.status(200).json({NEWPERMISSION});
        }catch(error:any){
            return response.status(400).json({
                Error: error.message
            })
        }
    }
   
    
}


export default new Permission();