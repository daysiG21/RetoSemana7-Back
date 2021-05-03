import {Alumno} from "../config/relaciones";

export const crearAlumno = async(req,res)=>{
  try{
      const {nuevo} = await Alumno.create(req.body);
      return res.status(201).json({
        success:true,
        content:nuevo,
        message:"Alumno registrado",
      });
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:null,
      message:"Error al registrar el alumno",
    });
  }

};

export const listarAlumnos = async (req, res) => {
  try {
    
    const alumnos = await Alumno.findAll();
    console.log(alumnos);
    return res.json({
      success: true,
      content: alumnos,
      message: null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      content: error,
      message: "Error al devolver los alumnos",
    });
  }
};

export const listarAlumnoId = async(req, res)=>{
  try{
    const {id} = req.params;    
    const alumnos= await Alumno.findByPk(id);
    
    if(alumnos){
      return res.json({
        success:true,
        content:alumnos,
        message:null,
      });
    }
    else{
      return res.json({
        success:false,
        content:null,
        message:`El alumno con id ${id} no existe`
      });
    } 
    
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al buscar el alumno"
    })
  }
};

export const actualizarAlumno = async(req,res)=>{
  try{
    const id = req.params.id;    
    const alumnos = await Alumno.update(req.body,{
      where:{id:id}
    }).then(num=>{
      if(num==1){
        return res.json({
          success:true,          
          message:"Alumno actualizado"
        });
      }else{
        return res.json({
          success:false,          
          message:`No se puede actualizar el alumno con id ${id}`
        });
      }
    }

    )
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al actualizar el alumno"
    })

  }
};

export const eliminarAlumno = async(req,res)=>{
  try{
    const id = req.params.id;
    
    const alumnos = await Alumno.destroy({
      where:{id:id}
    }).then(num=>{
      
      if(num==1){
        return res.json({
          success:true,          
          message:"Alumno eliminado"
        });
      }else{
        return res.json({
          success:false,          
          message:`No se puede eliminar el alumno con id ${id}`
        });
      }
    }

    )
  }
  catch(error){
    return res.status(500).json({
      success:false,
      content:error,
      message:"Error al eliminar el alumno"
    })

  }
};