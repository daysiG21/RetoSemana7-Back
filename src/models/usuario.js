import {model,Schema} from "mongoose";
import {tareaSchema} from "./tareas";

const usuarioSchema = new Schema({
  usuarioNombre:{
    type:Schema.Types.String,
    alias:"nombre",
  },
  usuarioApellido:{
    type:Schema.Types.String,
    alias:"apellido",//sirve para modificar el nombre de la columna en la bd
    /*
    indica que el campo no puede tener un valor nulo
    adicionalmente a las caracteristicas previas podemos indicar
    algunas adicionales dependiendo del tipo de dato de la columna
    https://mongoosejs.com/docs/schematypes.html
    */
    required:true,
    trim:true,//elimina los espacios al comienzo y al final del texto
    minLength:5,
    maxLength:30,
  },
  usuarioCorreo:{
    unique:true,
    type:Schema.Types.String,
    required:true,
    alias:"correo",
  },
  usuarioPassword:{
    type:Schema.Types.String,
    alias:"password",
  },
  usuarioCelular:{
    type:Schema.Types.Number,
    unique:true,
    alias:"celular",
  },
  usuarioFechaNacimiento:{
    type:Schema.Types.Date,
    alias:"Fecha",
  },
  usuarioTareas:[tareaSchema],
},
{
  timestamps:{
    createdAt:"fechaCreacion",
    updatedAt:false,
  },
});

export const Usuario = model("usuario",usuarioSchema);