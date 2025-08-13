import { useContext } from "react";
import { CartContext } from "../context/Cart";

export function useCart () {
  const context = useContext(CartContext)

  // Es buena practica revisar si el contexto existe
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}