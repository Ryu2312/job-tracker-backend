import { where } from "sequelize";
import { ApiError } from "../middleware/error-handler.js";
import Postulacion from "../models/Postulacion.js";
import Usuario from "../models/Usuario.js";
import {
  EditPostulacion,
  PostulacionType,
} from "../schemas/postulacionSchema.js";

const crearPostulacion = async (datos: PostulacionType) => {
  const postulacion = await Postulacion.create(datos);

  if (!postulacion) throw new ApiError("Failed to create post", 500);

  return postulacion;
};

const obtenerPostulaciones = async (datos: PostulacionType) => {
  const usuario = await Usuario.findByPk(datos.usuarioId);
  if (!usuario) {
    throw new ApiError("Not Found: El usuario proporcionado no existe.", 404);
  }

  const postulaciones = await Postulacion.findAll({
    where: { usuarioId: usuario.id },
  });

  return postulaciones || [];
};

const actualizarPostulacion = async (id: string, datos: EditPostulacion) => {
  const postulacion = await Postulacion.findOne({
    where: {
      id: id,
      usuarioId: datos.usuarioId,
    },
  });

  if (!postulacion)
    throw new ApiError(
      "Not Found: El post que intentas actualizar no existe.",
      404
    );

  await postulacion.update(datos);
  return postulacion;
};

const eliminarPostulacion = async (id: string, usuarioId: number) => {
  const postulacion = await Postulacion.findOne({
    where: {
      id,
      usuarioId,
    },
  });

  if (!postulacion) {
    throw new ApiError("Not Found: Postulacion no encontrada", 404);
  }

  await postulacion.destroy();
};

export default {
  crearPostulacion,
  obtenerPostulaciones,
  actualizarPostulacion,
  eliminarPostulacion,
};
