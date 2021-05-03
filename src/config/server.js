import express from "express";
import {json} from "body-parser";
import {conexion} from "./sequelize";
import {alumno_router} from "../routes/alumno";
import {matricula_router} from "../routes/matricula";

export default class Server{
  constructor(){
    this.app = express();
    this.port=process.env.PORT || 8000;
    this.bodyParser();
    this.rutas();
  }
  bodyParser(){
    this.app.use(json());
  }
  rutas(){
    this.app.use("/api",alumno_router);
    this.app.use("/api",matricula_router);
    this.app.get("/",(req,res)=>{
      res.send("Bienvenido a mi API")
    });
  }
  iniciarServidor(){
    this.app.listen(this.port,async()=>{
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
      try{
        await conexion.sync();
        console.log("Base de datos sincronizada");
      }
      catch(error){
        console.log(error);
      }
    });
  }
}