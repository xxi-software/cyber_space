import { dropDiapositiva } from "./animated/dropDiapositiva.js";
import generarDiapositivas from "./animated/generarDiapositivas.js";
import pintarDiapositivas from "./animated/pintarDiapositivas.js";
import getDataNasa from "./functions/getDataNasa.js";

let data = {};

async function init() {
  // Llamada a la función para obtener datos de la NASA
  data = await getDataNasa();
  generarDiapositivas(data);
  pintarDiapositivas();
  dropDiapositiva();
}

export { init };
