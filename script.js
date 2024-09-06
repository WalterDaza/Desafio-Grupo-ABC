let indiceColor = 0; // Contador para recorrer el array de colores

const colores = ["blue", "red", "green"];

function numberFunction(element) {
    element.style.color = colores[indiceColor];

    indiceColor = (indiceColor + 1) % colores.length;
}
 