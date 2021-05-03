import {Router} from "express";
import * as alumno_controller from "../controllers/alumno";

export const alumno_router = Router();

alumno_router.route("/alumnos")
.get(alumno_controller.listarAlumnos)
.post(alumno_controller.crearAlumno);

alumno_router.route("/alumnos/:id")
.get(alumno_controller.listarAlumnoId)
.put(alumno_controller.actualizarAlumno)
.delete(alumno_controller.eliminarAlumno);