"use strict"
import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/conect'; 


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    }
})


   /*
    User.sync({force: true})
        .then(()=> {
            console.log("Model created sucessfuly");
        }).catch((e: any) => {
            console.log("Error detected" + e.message)
        })

   */

export {
    User
};