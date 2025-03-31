import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "../config/dataBase.js";
import Usuario from "./Usuario.js";

class Postulacion extends Model<
  InferAttributes<Postulacion>,
  InferCreationAttributes<Postulacion>
> {
  declare id: CreationOptional<number>;
  declare titulo_puesto: string;
  declare empresa: string;
  declare fecha_postulacion: Date;
  declare estado: string;
  declare fuente: string | undefined;
  declare enlace_oferta: string | undefined;
  declare comentarios: string | undefined;
  declare usuarioId: number;
}

Postulacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo_puesto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_postulacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estado: {
      type: DataTypes.ENUM("pendiente", "en proceso", "aceptada", "rechazada"),
      allowNull: false,
      defaultValue: "pendiente",
    },
    fuente: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    enlace_oferta: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    comentarios: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Postulacion",
    tableName: "postulaciones",
    timestamps: true,
  }
);

export default Postulacion;
