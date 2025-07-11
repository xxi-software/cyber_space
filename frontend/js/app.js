import generarDiapositivas from "./animated/generarDiapositivas.js";
import pintarDiapositivas from "./animated/pintarDiapositivas.js";
import getDataNasa from "./functions/getDataNasa.js";
import setDataNasa from "./functions/setDataNasa.js";

let data = {};

async function init() {
  // Llamada a la función para obtener datos de la NASA
  data = await getDataNasa();
  console.log(data);
  generarDiapositivas(data);
  pintarDiapositivas();
}

export { init };
