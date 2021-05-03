import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default()=>
conexion.define(
  "matricula",
  {
    matriculaId:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      unique:true,
      autoIncrement:true,
      field:"idMatricula",
    },
    matriculaPeriodo:{
      type:DataTypes.STRING(10),
      field:"periodo",
    },
    
  },
  {
    tableName:"matricula",
    timestamps:false,
  }
);