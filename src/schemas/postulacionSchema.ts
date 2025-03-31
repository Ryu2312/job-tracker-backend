import { z } from "zod";

export const postulacionSchema = z.object({
  titulo_puesto: z
    .string({
      required_error: "El titulo del puesto es requerido",
      invalid_type_error: "El titulo del puesto debe ser una cadena de texto",
    })
    .min(1, { message: "El titulo del puesto es requerido" }),
  empresa: z
    .string({
      required_error: "El nombre de la empresa es requerido",
      invalid_type_error:
        "El nombre de la empresa debe ser una cadena de texto",
    })
    .min(1, { message: "El nomnbre de la empresa es requerido" }),
  fecha_postulacion: z
    .date()
    .optional()
    .default(() => new Date()),
  estado: z
    .enum(["pendiente", "en proceso", "aceptada", "rechazada"])
    .optional()
    .default("pendiente"),
  fuente: z.string().optional(),
  enlace_oferta: z.string().url().optional(),
  comentarios: z.string().optional(),
  usuarioId: z.number({ required_error: "UsuarioId es requerido" }),
});

export type PostulacionType = z.infer<typeof postulacionSchema>;

export const editPostulacionSchema = postulacionSchema.partial();
export type EditPostulacion = z.infer<typeof editPostulacionSchema>;
