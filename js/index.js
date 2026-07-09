// Funciones para enviar objetos al array/carrito
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

// Función que se ocupa de renderizar las tarjetas de productos
const renderizarProductos = () => {
  const contenedor = document.getElementById("contenedor-tarjetas");

  fetch("./data/productos.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((producto) => {
        const card = document.createElement("article");
        card.classList.add("card", "col-md-4", "mb-4");
        const img = document.createElement("img");
        img.src = `./${producto.img}`;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const boton = document.createElement("button");
        boton.classList.add("btn", "btn-primary");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(precio);
        card.appendChild(boton);
        contenedor.appendChild(card);
      });
    })
    .catch((error) => console.log(error));
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});
