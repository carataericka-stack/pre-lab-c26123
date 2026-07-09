import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  const contenedor = document.getElementById("contenedor-carrito");
  const divAcciones = document.getElementById("acciones-carrito");

  // Para resetear el carrito cada vez que se borre un producto
  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "Tu carrito está vacío";

    contenedor.appendChild(mensaje);
    return;
  }

  carrito.forEach((producto, index) => {
    const card = document.createElement("article");
    card.classList.add("card", "text-secondary");

    const img = document.createElement("img");
    img.src = `./${producto.img}`;
    img.alt = producto.nombre;

    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    const botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn", "bg-secondary", "text-dark");
    botonEliminar.classList.add("mb-2");
    botonEliminar.textContent = "Eliminar producto";

    botonEliminar.addEventListener("click", () => {
      eliminarProducto(index);
      renderizarCarrito();
    });

    card.appendChild(titulo);
    card.appendChild(precio);
    card.appendChild(botonEliminar);

    contenedor.appendChild(card);
  });

  const botonVaciar = document.createElement("button");
  botonVaciar.classList.add("btn", "bg-secondary", "text-dark");
  botonVaciar.classList.add("btn-vaciar-carrito");
  botonVaciar.textContent = "Vaciar carrito";

  botonVaciar.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  divAcciones.appendChild(botonVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
