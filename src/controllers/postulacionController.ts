import { NextFunction, Request, Response } from "express";
import postulacionServicios from "../services/postulacionServicios.js";

const crearPostulacion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postulacion = await postulacionServicios.crearPostulacion(req.body);
    res.status(201).json({
      status: "success",
      data: postulacion,
    });
  } catch (error) {
    next(error);
  }
};

const obtenerPostulaciones = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postulaciones = await postulacionServicios.obtenerPostulaciones(
      req.body
    );
    res.status(200).json({
      status: "success",
      data: postulaciones,
    });
  } catch (error) {
    next(error);
  }
};

const actualizarPostulacion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postulacion = await postulacionServicios.actualizarPostulacion(
      req.params.id,
      req.body
    );
    res.status(200).json({
      status: "success",
      data: postulacion,
    });
  } catch (error) {
    next(error);
  }
};

const eliminarPostulacion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await postulacionServicios.eliminarPostulacion(
      req.params.id,
      req.body.usuarioId
    );
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  crearPostulacion,
  obtenerPostulaciones,
  actualizarPostulacion,
  eliminarPostulacion,
};
