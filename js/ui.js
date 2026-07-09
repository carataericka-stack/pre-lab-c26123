// Función que actualiza el contador de productos en la navegación
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");

  if (contador) {
    contador.textContent = carrito.length;
  }
};
// Función para mostrar mensajes al usuario
export const mostrarMensaje = (texto) => {
  alert(texto);
};
