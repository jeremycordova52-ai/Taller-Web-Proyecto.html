/* =======================================================
APF3 – Taller de Programación Web
Archivo: app.js
Cumple: Variables, eventos, arrays, ciclos, DOM,
menú responsivo, modal, alert/prompt/confirm
   ======================================================= */

// -------------------- 1. VARIABLES Y CONSTANTES --------------------
let contadorCarrito = 0;                      // variable
const carrito = [];                           // arreglo
const TIENDA = "FERCOR PERU";                 // constante
let modoOscuro = false;                       // booleano

console.log("Proyecto cargado correctamente:", TIENDA);


// -------------------- 2. EVENTOS: BOTONES AGREGAR AL CARRITO --------------------
document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".add-cart");
    const contadorHTML = document.getElementById("contador");

    botones.forEach(boton => {
        boton.onclick = function () {          // EVENTO desde JS
            const producto = boton.dataset.producto;

            contadorCarrito++;
            contadorHTML.textContent = contadorCarrito;

            carrito.push(producto);
            console.log("Se agregó:", producto);
            mostrarMensaje("Producto agregado: " + producto);

            // condicional obligatorio
            if (contadorCarrito >= 5) {
                console.log("¡Ya compraste bastante!");
            }
        };
    });
});


// -------------------- 3. MENSAJE FLOTANTE (DOM CREADO) --------------------
function mostrarMensaje(texto) {
    const msg = document.createElement("div");
    msg.classList.add("msg");
    msg.innerText = texto;
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();   // elimina el elemento del DOM
    }, 1500);
}


// -------------------- 4. EJEMPLO OBLIGATORIO DE prompt(), alert(), confirm() --------------------
function bienvenida() {
    const nombre = prompt("Bienvenida a " + TIENDA + ". ¿Cuál es tu nombre?");
    if (nombre) {
        alert("Hola " + nombre + " ❤️ Gracias por visitarnos");
    }
}
bienvenida();


// -------------------- 5. MENÚ RESPONSIVO (ClassList Toggle) --------------------
const menuBtn = document.getElementById("menu-toggle");
const nav = document.querySelector("nav ul");

menuBtn.onchange = function () {
    nav.classList.toggle("abrir-menu");   // clase que puedes manejar en CSS
    console.log("Menú abierto/cerrado");
};




// -------------------- 7. CICLO FOR PARA RECORRER ARRAY --------------------
function mostrarCarritoEnConsola() {
    console.log("----- PRODUCTOS EN EL CARRITO -----");
    for (let i = 0; i < carrito.length; i++) {
        console.log((i + 1) + ". " + carrito[i]);
    }
    console.log("----------------------------------");
}

// ======================== BOTÓN DINÁMICO ==========================

// Crear botón cuando cargue la página
const btnVerCarrito = document.createElement("button");
btnVerCarrito.innerText = "Mostrar carrito";
btnVerCarrito.style.margin = "20px";
btnVerCarrito.style.padding = "10px";
btnVerCarrito.style.borderRadius = "8px";
btnVerCarrito.style.border = "none";
btnVerCarrito.style.cursor = "pointer";
btnVerCarrito.style.background = "#51d140";
btnVerCarrito.style.color = "black";
btnVerCarrito.style.fontSize = "17px";
btnVerCarrito.style.display = "block";
btnVerCarrito.style.margin = "20px auto"

document.body.appendChild(btnVerCarrito);

// Crear el contenedor donde se mostrará el carrito
const contenedorCarrito = document.createElement("div");
contenedorCarrito.style.background = "rgba(0,0,0,0.7)";
contenedorCarrito.style.color = "white";
contenedorCarrito.style.padding = "15px";
contenedorCarrito.style.margin = "20px";
contenedorCarrito.style.borderRadius = "10px";
contenedorCarrito.style.display = "none"; 
document.body.appendChild(contenedorCarrito);


// Evento del botón dinámico
btnVerCarrito.onclick = function () {

    //  oculta
    if (contenedorCarrito.style.display === "block") {
        contenedorCarrito.style.display = "none";
        btnVerCarrito.innerText = "Mostrar carrito";
        return;
    }

    // Limpia
    contenedorCarrito.innerHTML = "<h3>Productos en el carrito:</h3>";

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML += "<p>No hay productos seleccionados.</p>";
    } else {
        carrito.forEach(prod => {
            const p = document.createElement("p");
            p.textContent = "• " + prod;
            contenedorCarrito.appendChild(p);
        });
    }

    // contenedor
    contenedorCarrito.style.display = "block";
    btnVerCarrito.innerText = "Ocultar carrito";
};



// Preguntar el nombre al usuario (PROMPT)
const nombreUsuario = prompt("Bienvenido/a a FERCOR PERU ❤️ ¿Cuál es tu nombre?");

// Si ingresó algo, lo saludamos con ALERT
if (nombreUsuario && nombreUsuario.trim() !== "") {
    alert("Hola " + nombreUsuario + ", gracias por visitarnos ✨");
} else {
    alert("¡Bienvenido/a! Gracias por visitar nuestra tienda ✨");
}


const deseaVer = confirm("¿Deseas ver nuestras ofertas y productos?");

// Si el usuario NO quiere ver la página → enviar a Google
if (!deseaVer) {
    alert("Gracias por visitarnos. Saliendo de la página...");
    window.location.href = "https://www.google.com";
} else {
    console.log("El usuario quiere ver los productos.");
}
