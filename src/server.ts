import { app } from "./app.js";
import { sequelize } from "./config/dataBase.js";

const PORT = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente");

    sequelize.sync();
  })
  .then(() => {
    console.log("Modelos sincronizados con la base de datos");

    app.listen(PORT, () => {
      console.log("Servidor iniciado en el puerto: ", PORT);
    });
  })
  .catch((error) =>
    console.error("No se pudo conectar o sincronizar la base de datos:", error)
  );
