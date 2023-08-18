import express from "express";
import { agregarPacientes, obtenerPacientes, obtenerPaciente, ActualizarPaciente, EliminarPaciente } from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";
const router = express.Router();

router.route('/').post(checkAuth, agregarPacientes).get(checkAuth, obtenerPacientes)
router.route('/:id').get(checkAuth, obtenerPaciente).put(checkAuth, ActualizarPaciente).delete(checkAuth, EliminarPaciente)



export default router