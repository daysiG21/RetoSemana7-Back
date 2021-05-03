import {Router} from "express";
import * as matricula_controller from "../controllers/matricula";

export const matricula_router = Router();

matricula_router.route("/matricula")
.get(matricula_controller.listarMatricula)
.post(matricula_controller.listarMatriculaIdAlumno)
.post(matricula_controller.crearMatricua);

matricula_router.route("/matricula/:idMatricula")

.put(matricula_controller.actualizarMatricula)
.delete(matricula_controller.eliminarMatricula);