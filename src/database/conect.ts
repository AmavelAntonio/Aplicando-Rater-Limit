"use strict"
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('user', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
});

sequelize.authenticate().then(()=> {
    console.log("Conexão estabelecida com sucesso");
}).catch((err)=>{
    console.log("Mensagem" + err.message)
})


export{
    sequelize
}; 