import animatedGsap from "./animated/gsap.js";
import getDataNasa from "./functions/getDataNasa.js";
import setDataNasa from "./functions/setDataNasa.js";

function init() {
  // Llamada a la función para obtener datos de la NASA
  const dataNada = getDataNasa();
  setDataNasa(dataNada);
}

function animated() {
  animatedGsap();
}

export { init, animated };
