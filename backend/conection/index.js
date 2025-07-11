import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Cargar variables de entorno desde .env
dotenv.config();

const url = process.env.URL_MONGO;
if (!url) {
  throw new Error(
    "La URL de conexión a MongoDB no está definida en las variables de entorno."
  );
}

const client = new MongoClient(url);
let connected = false;

async function connect() {
  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");
    return client;
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
}

export { connect, client };
