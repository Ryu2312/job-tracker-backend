import usuarioServices from "../services/usuarioServices.js";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const crearUsuario = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuario = await usuarioServices.crearUsuario(req.body);

    const payload = {
      usuarioId: usuario.id,
    };

    const token = jwt.sign(payload, process.env.JWTSECRETKEY as string, {
      expiresIn: "40000m",
    });

    res.status(200).json({
      ok: true,
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

const inicioSesion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuario = await usuarioServices.validarUsuario(req.body);

    const payload = {
      usuarioId: usuario.id,
    };

    const token = jwt.sign(payload, process.env.JWTSECRETKEY as string, {
      expiresIn: "40000m",
    });

    res.status(200).json({
      ok: true,
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  crearUsuario,
  inicioSesion,
};
