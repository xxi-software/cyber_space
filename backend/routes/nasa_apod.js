import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Obtén el directorio actual de este archivo
const __dirname = dirname(fileURLToPath(import.meta.url));

// Construye la ruta relativa a este archivo
const insumoPath = join(__dirname, "../dataprueba/insumo.json");
const insumo = JSON.parse(readFileSync(insumoPath, "utf-8"));

const nasa_apod = async (req, res) => {
  try {
    //const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY_NASA}`;
    //const response = await fetch(nasaUrl);
    //const data = await response.json();
    console.log(insumo[0]);
    res.json(insumo[1]);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos de NASA" });
  }
};

export default nasa_apod;
