import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import postulacionRouter from "./routes/postulacionRoutes.js";
import notFoundHandler from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(usuarioRoutes);
app.use(postulacionRouter);

app.use(notFoundHandler);
app.use(errorHandler);
