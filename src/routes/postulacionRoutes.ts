import { Router } from "express";
import postulacionController from "../controllers/postulacionController.js";
import { validationHandler } from "../middleware/validation.js";
import {
  editPostulacionSchema,
  postulacionSchema,
} from "../schemas/postulacionSchema.js";
import { authenticateHandler } from "../middleware/authenticate.js";

const router = Router();

router.post(
  "/postulacion",
  authenticateHandler,
  validationHandler(postulacionSchema),
  postulacionController.crearPostulacion
);

router.get(
  "/postulacion",
  authenticateHandler,
  postulacionController.obtenerPostulaciones
);

router.put(
  "/postulacion/:id",
  authenticateHandler,
  validationHandler(editPostulacionSchema),
  postulacionController.actualizarPostulacion
);

router.delete(
  "/postulacion/:id",
  authenticateHandler,
  postulacionController.eliminarPostulacion
);

export default router;
