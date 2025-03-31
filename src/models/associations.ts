import Postulacion from "./Postulacion.js";
import Usuario from "./Usuario.js";

Usuario.hasMany(Postulacion, { foreignKey: "usuarioId", as: "postulaciones" });
Postulacion.belongsTo(Usuario, { foreignKey: "usuarioId", as: "usuario" });
