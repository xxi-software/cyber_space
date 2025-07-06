import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nasa_apod from "./routes/nasa_apod.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/api/nasa", nasa_apod);

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
