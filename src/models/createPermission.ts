"use strict"
import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/conect';

const CreatePermissions = sequelize.define('createPermissions', {
    id:{
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    description: {
        type: DataTypes.STRING, 
        allowNull: false
    }
})



/*
CreatePermissions.sync({force: false})
    .then(()=> {
        console.log("Table created sucessfuly")
    })
    .catch((error: any) => {
        console.log("Error did when try created table" + error.message)
    })
*/

 export {
    CreatePermissions
 }   