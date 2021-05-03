import {DataTypes} from "sequelize";
import {conexion} from "../config/sequelize";

export default()=>
  conexion.define(
    "alumno",
    {
      alumnoId:{
        allowNull:false,
        type:DataTypes.INTEGER,
        primaryKey:true,
        field:"id",
        autoIncrement:true,
        unique:true,
      },
      alumnoNombre:{
        type:DataTypes.STRING(100),
        field:"nombres",
      },
      alumnoApePat:{
        type:DataTypes.STRING(100),
        field:"apePat",
      },
      alumnoApeMat:{
        type:DataTypes.STRING(100),
        field:"apeMat",
      },
    },
    {
      tableName:"alumno",
      timestamps:false,
    }
  );
