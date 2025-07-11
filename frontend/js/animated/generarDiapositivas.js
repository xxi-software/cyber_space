// Generar las diapositivas
const container = document.getElementById("slides-container");

function generarDiapositivas(data) {
  data.forEach((obj, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = "slide";

    const img = document.createElement("img");
    img.src = obj.url;
    img.alt = obj.title;
    img.className = "background";

    const content = document.createElement("div");
    content.className = "content-container";

    content.innerHTML = `
            <span class="close">X</span>
            <h2>${obj.title}</h2>
            <p class="explanation">${obj.explanation}</p>
            <div class="meta">
                <span>© ${obj.copyright}</span>
                <span>${obj.date}</span>
            </div>
        `;

    slideElement.appendChild(img);
    slideElement.appendChild(content);
    container.appendChild(slideElement);
  });
}

export default generarDiapositivas;
