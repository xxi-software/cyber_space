import only20 from "../functions/only20.js";
import { getDataMongo } from "../nasa_data/getDataMongo.js";

const nasa_apod = async (req, res) => {
  try {
    const nasaData = await getDataMongo();
    if (!nasaData || nasaData.length === 0) {
      return res.status(404).json({ error: "No se encontraron datos de NASA" });
    }
    const twentElements = only20(nasaData[0].nasa_data);
    res.json(twentElements);
  } catch (error) {
    console.error("Error completo:", error);
    res.status(500).json({
      error: "Error al obtener datos de NASA",
      details: error.message,
    });
  }
};

export default nasa_apod;
