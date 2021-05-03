import {Sequelize} from "sequelize";

export const conexion = new Sequelize(
  "alumnos",
  "root",
  "Pwsqladmin1",
  {
    dialect:"mysql",    
    host:"127.0.0.1",
    port:3306,
    timezone:"-05:00",
    dialectOptions:{
      dateStrings:true
    },
    
    logging: false,
  }
)