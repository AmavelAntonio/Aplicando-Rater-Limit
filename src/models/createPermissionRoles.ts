'use strict'
import { sequelize } from "../database/conect";
import { DataTypes } from 'sequelize'

const Permission_Roles = sequelize.define('Permission_Roles', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    id_Rules: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    id_Permissions: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }

})

/*Permission_Roles.sync({force: true})
    .then(()=> {
        console.log("Tabela criada com sucesso")
    })
    .catch((e: any) =>{
        console.log("Error when triyng create table "+ e.message);

    })
*/

 export {
    Permission_Roles
 }   