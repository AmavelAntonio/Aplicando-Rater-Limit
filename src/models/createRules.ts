"use strict";
import  { DataTypes } from 'sequelize';
import { sequelize } from '../database/conect';

const Rules = sequelize.define('Rules', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
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
Rules.sync({force: true})
    .then(() => {
        console.log("Database rules created with sucess");
    })
    .catch((e:any) => {
        console.log("Impossible create database" + e.message);
    })
*/

export {
    Rules
}