import { compare, hash } from "bcrypt-ts";
import Usuario from "../models/Usuario.js";
import { Login, User } from "../schemas/usuarioSchema.js";
import { ApiError } from "../middleware/error-handler.js";

const crearUsuario = async (datos: User) => {
  const { email, password } = datos;

  const emailIsValid = await Usuario.findOne({ where: { email } });
  if (emailIsValid) {
    throw new ApiError("El email ya está registrado", 400);
  }

  datos.password = await hash(password, 10);
  const usuario = await Usuario.create(datos);
  
  return usuario;
};

const validarUsuario = async ({ email, password }: Login) => {
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario) {
    throw new ApiError("Credenciales Incorrectas", 401);
  }

  const isvalid = await compare(password, usuario.password);
  if (!isvalid) {
    throw new ApiError("Credenciales Incorrectas", 401);
  }

  return usuario;
};

export default { crearUsuario, validarUsuario };
