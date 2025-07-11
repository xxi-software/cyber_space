function pintarDiapositivas() {
  // Registrar el plugin ScrollTrigger de GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Inicializar animaciones cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", function () {
    // Configurar ScrollTrigger para cada slide
    const slides = gsap.utils.toArray(".slide");

    // Crear barra de progreso
    gsap.to(".progress-bar", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
      },
    });

    // Animación para cada slide
    slides.forEach((slide, i) => {
      const content = slide.querySelector(".content-container");
      const img = slide.querySelector(".background");

      // Configurar ScrollTrigger para el slide actual
      ScrollTrigger.create({
        trigger: slide,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onEnter: () => {
          // Animación de entrada
          gsap.fromTo(
            img,
            { scale: 1.2, opacity: 0.7 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
          );

          gsap.fromTo(
            content,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
          );
        },
        onLeave: () => {
          // Animación de salida
          gsap.to(content, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
          });
        },
        onEnterBack: () => {
          // Animación al volver
          gsap.fromTo(
            img,
            { scale: 1.1, opacity: 0.8 },
            { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
          );

          gsap.fromTo(
            content,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" }
          );
        },
      });

      // Efecto parallax para la imagen de fondo
      gsap.to(img, {
        y: -100,
        scrollTrigger: {
          trigger: slide,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    // Ocultar indicador de scroll cuando se empiece a desplazar
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        const indicator = document.querySelector(".scroll-indicator");
        if (self.progress > 0.05) {
          gsap.to(indicator, { opacity: 0, duration: 0.5 });
        } else {
          gsap.to(indicator, { opacity: 1, duration: 0.5 });
        }
      },
    });
  });
  // Cerrar la ventana de contenido al hacer clic en la X pero sin quitar la imagen de fondo
  // y con animación de desvanecimiento
  document.querySelectorAll(".close").forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.parentElement;
      gsap.to(content, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          content.style.display = "none";
        },
      });
    });
  });
}

export default pintarDiapositivas;
