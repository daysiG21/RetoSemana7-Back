import {Router} from "express";
import * as tarea_controller from "../controllers/tareas";
import {watchmen} from "../utils/validadores";

export const tarea_router = Router();

tarea_router.route("/tarea")
.post(watchmen,tarea_controller.crearTarea)
.get(watchmen,tarea_controller.listarTarea);
