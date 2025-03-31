import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";
import { validationHandler } from "../middleware/validation.js";
import { loginSchema, usuarioSchema } from "../schemas/usuarioSchema.js";

const router = Router();

router.post(
  "/usuario",
  validationHandler(usuarioSchema),
  usuarioController.crearUsuario
);

router.post(
  "/auth/login",
  validationHandler(loginSchema),
  usuarioController.inicioSesion
);

export default router;
