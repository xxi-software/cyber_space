const galaxyAnimated = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const galaxy = document.querySelector(".galaxy");
    // Animación de rotación permanente
    gsap.to(galaxy, {
      rotation: 360,
      duration: 20,
      repeat: -1, // -1 para repetir infinitamente
      ease: "none", // Rotación lineal constante
    });
  });
};

export default galaxyAnimated;
