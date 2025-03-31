import { z } from "zod";

export const usuarioSchema = z.object({
  name: z.string({
    required_error: "Nombre es requerido.",
    invalid_type_error: "Nombre debe ser un string.",
  }),
  email: z
    .string({
      required_error: "Correo es requerido.",
      invalid_type_error: "Correo debe ser un string.",
    })
    .email("Ingrese un correo válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export type User = z.infer<typeof usuarioSchema>;

export const loginSchema = usuarioSchema.omit({ name: true });
export type Login = z.infer<typeof loginSchema>;
