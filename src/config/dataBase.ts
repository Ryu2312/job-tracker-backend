import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);
