import { client, connect } from "../conection/index.js";

async function getDataMongo() {
  try {
    await connect(); // Asegúrate de que la conexión esté establecida
    const db = client.db("cyber_animation");
    const collection = db.collection("nasa_apod");

    // Verifica si la colección está vacía
    const count = await collection.countDocuments();
    if (count === 0) {
      console.log("La colección está vacía.");
      return [];
    }

    // Obtiene todos los documentos de la colección
    const data = await collection.find({}).toArray();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de MongoDB:", error);
    throw error;
  }
}

export { getDataMongo };
