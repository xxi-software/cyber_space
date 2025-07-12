export const dropDiapositiva = () => {
  const containers = document.querySelectorAll("#container");
  let isDragging = false;
  let currentContainer = null;
  let startX, startY, initialX, initialY;

  containers.forEach((container) => {
    // Mouse events
    container.addEventListener("mousedown", (e) => {
      isDragging = true;
      currentContainer = container;

      // Guarda la posición inicial del mouse
      startX = e.clientX;
      startY = e.clientY;

      // Guarda la posición inicial del contenedor
      const style = window.getComputedStyle(container);
      initialX = parseInt(style.left, 10) || 0;
      initialY = parseInt(style.top, 10) || 0;

      container.style.cursor = "grabbing";
      e.preventDefault(); // Previene selección de texto
    });

    // Touch events
    container.addEventListener("touchstart", (e) => {
      isDragging = true;
      currentContainer = container;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;

      const style = window.getComputedStyle(container);
      initialX = parseInt(style.left, 10) || 0;
      initialY = parseInt(style.top, 10) || 0;

      container.style.cursor = "grabbing";
    });
  });

  const handleMove = (clientX, clientY) => {
    if (!isDragging || !currentContainer) return;

    // Calcula la nueva posición basada en el movimiento del mouse
    const deltaX = clientX - startX;
    const deltaY = clientY - startY;

    currentContainer.style.left = `${initialX + deltaX}px`;
    currentContainer.style.top = `${initialY + deltaY}px`;
  };

  document.addEventListener("mousemove", (e) => {
    handleMove(e.clientX, e.clientY);
  });

  document.addEventListener("touchmove", (e) => {
    if (!isDragging || !currentContainer) return;
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  });

  const handleDragEnd = () => {
    if (isDragging && currentContainer) {
      currentContainer.style.cursor = "grab";
    }
    isDragging = false;
    currentContainer = null;
  };

  document.addEventListener("mouseup", handleDragEnd);
  document.addEventListener("touchend", handleDragEnd);
};
