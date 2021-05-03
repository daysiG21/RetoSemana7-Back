import {tareaSchema} from "../models/tareas";
import {Usuario} from "../models/usuario";
import { model } from 'mongoose'
import {verificarToken} from "../utils/validadores";

export const crearTarea = async(req, res)=>{
  try{
    const token = req.headers.authorization.split(" ")[1];
    const payload = verificarToken(token);    

    const Tarea = model('Tarea',tareaSchema)
   
    const usuario = await Usuario.findById(payload.usuarioId);
    const nuevaTarea = new Tarea({...req.body,tareaEstado: 'Por hacer'})
    
    usuario.usuarioTareas = [
      ...usuario.usuarioTareas,
      nuevaTarea
    ]
    
    await usuario.save()
    return res.status(201).json({
      success: true,
      content: nuevaTarea,
      message: 'Tarea agregada correctamente'
    })
   
    
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:null,
      message:"Error al agregar la tarea"
    });

  }
};

export const listarTarea = async(req, res)=>{
  try{
    const token = req.headers.authorization.split(" ")[1];
    const payload = verificarToken(token);

    const usuario = await Usuario.findById(payload.usuarioId);
  
    if(usuario.usuarioTareas.length>0){
      return res.json({
        success:true,
        content:usuario.usuarioTareas,
        message:null
      });
    }
    else{
      return res.json({
        success:true,
        content:usuario.usuarioTareas,
        message:`El usuario ${usuario.usuarioCorreo} no tiene tareas`
      });
    }
    
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:null,
      message:"Error al listar las tareas del usuario",
    });
  }
};