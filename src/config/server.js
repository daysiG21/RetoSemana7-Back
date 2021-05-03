import express from "express";
import {json} from "body-parser";
import { connect } from "mongoose";
import {usuario_router} from "../routes/usuario";
import {tarea_router} from "../routes/tareas";

export default class server{
  constructor(){
    this.app=express();
    this.port = process.env.PORT || 8000;
    this.bodyParser();
    this.rutas();
  }

  bodyParser(){
    this.app.use(json());
  }
  rutas() {
    this.app.get("/", (req, res) => res.send("Bienvenido a mi API"));
    this.app.use(usuario_router);
    this.app.use(tarea_router);
  }
  iniciarServidor(){
    this.app.listen(this.port,async()=>{
      console.log(`Servidor corriendo en: http://127.0.0.1:${this.port}`);
      try{
        await connect(process.env.MONGO_COMPASS,{
          useNewUrlParser:true,
          useUnifiedTopology:true,
        });
        console.log("Base de datos conectada exitosaente");
      }
      catch(error){
        console.log(error)
      }
     
    });
  }
}