import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("¡Servidor iniciado!");
});

app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
