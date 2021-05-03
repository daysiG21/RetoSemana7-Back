require("dotenv").config();
import {verify} from "jsonwebtoken";

export const verificarToken =(token)=>{
  try{
    
    const payload = verify(token,process.env.JWT_SECRET);
   
    return payload;
  }
  catch(error){
    return error.message;
  }
};

export const watchmen =(req, res, next)=>{
  if(!req.headers.authorization){
    return res.status(401).json({
      success:false,
      content:null,
      message:"Necesita un token para esta ruta",
    });
  }
    const token = req.headers.authorization.split(" ")[1];
    
    const resultado = verificarToken(token);
    
    if(typeof resultado === "object"){
      next();
    }else{
      return res.status(401).json({
        success:false,
        content:resultado,
        message:"No está autorizado para realizar esta solicitud",
      });
    

  };
}