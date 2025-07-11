//Esta es una que obtiene un array y retorna 20 objetos al aleatorios
function only20(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const shuffled = array.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 20);

  return selected;
}

export default only20;
