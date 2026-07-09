// Este archivo maneja el guardado del carrito en localStorage

const KEY = "carrito";

// Guarda el carrito en localStorage
export const guardarCarrito = (carrito) => {
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

// Obtiene el carrito guardado en localStorage
export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

// Borra el carrito del localStorage
export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};
