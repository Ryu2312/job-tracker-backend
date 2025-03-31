import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "./error-handler.js";

export function authenticateHandler(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(new ApiError("No autorizado", 401));
    }

    const payload = jwt.verify(token, process.env.JWTSECRETKEY as string) as {
      usuarioId: number;
      iat: number;
      exp: number;
    };

    req.body.usuarioId = payload.usuarioId;

    next();
  } catch (error) {
    return next(new ApiError("No autorizado", 401));
  }
}

declare global {
  namespace Express {
    interface Request {
      usuarioId: number;
    }
  }
}
