//Shirley Castillo
//Cod 133173

console.log("¡Hola!");
console.log("¡Bienvenido/a al rincón donde la Tierra cobra vida! 🌱");
console.log("Gracias por estar aquí y ser parte del movimiento que hace florecer al mundo! 🌍💚");

//alert("¡Hola!");
//alert("¡Bienvenido/a al rincón donde la Tierra cobra vida! 🌱");
//alert("Gracias por estar aquí y ser parte del movimiento que hace florecer al mundo! 🌍💚");


const datos = [
    "El primer Día de la Tierra se celebró el 22 de abril de 1970 y movilizó a 20 millones de personas en EE.UU.",
    "Cada año se talan alrededor de 15 mil millones de árboles en el mundo.",
    "Si todos reciclaran una sola lata de aluminio, se ahorraría la energía necesaria para ver la televisión durante tres horas.",
    "El 20% del oxígeno mundial lo producen las algas marinas.",
    "Se estima que en 2050 habrá más plástico que peces en el océano, en peso.",
    "Plantar un solo árbol puede absorber hasta 22 kilos de CO₂ al año."
];

const contenedor = document.getElementById('dato-c');
if (contenedor) {
    function dato() {
        const indice = Math.floor(Math.random() * datos.length);
        contenedor.textContent = datos[indice];
    }

    // Llama a la función si es necesario automáticamente
    dato();
}

function video() {
    window.open('https://www.youtube.com/watch?v=A3hOQwdhkRU&ab_channel=GeovannyAgurto');
};

const form = document.querySelector('.formulario form');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Gracias por llenar este formulario.');
});
}

const cambio = document.getElementById("cambio");
const table = document.getElementById("table");

if (cambio && table) {
    cambio.addEventListener("change", function () {
        const color = cambio.value;
        table.style.backgroundColor = color;
    });
}

const formulario = document.querySelector(".formulario textarea"); // Usamos querySelector con clase

if (formulario) {
    formulario.addEventListener("mouseover", function() {
        formulario.style.backgroundColor = "black";
    });

    formulario.addEventListener("mouseout", function() {
        formulario.style.backgroundColor = ""; // Opcional: vuelve al color original
    });
}