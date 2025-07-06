async function getDataNasa() {
  try {
    const respuesta = await fetch("http://localhost:3000/api/nasa");
    if (!respuesta.ok) {
      throw new Error("Error en la petición al backend");
    }
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    return null;
  }
}

// Ejemplo
export default getDataNasa;
