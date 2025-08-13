import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'
// import { useState } from 'react'

export const CartContext = createContext()

export function CartProvider ( { children }) {
  const { state, addCart, clearCart, removeFromCart } = useCartReducer()
  // El useReducer -> RECIBE COMO PARAMETRO LA FUNCIÓN REDUCER, RECIBE EL ESTADO Y LA ACCIÓN
  // PARA DETERMINAR EL NUEVO ESTADO
  // Y COMO SEGUNDO PARÁMETRO EL ESTADO INICIAL
  // [state] -> Primer parámetro el estado
  // [dispatch] -> Segundo parámetro la función, la que se va encargar
  // de enviar las acciones al reducer
  

  // const [cart, setCart] = useState([])

  // const addCart = (product) => {
  //   const productInCartIndex  = cart.findIndex(cartItem => cartItem.id === product.id)

  //   // Si el producto ya está en el carrito, aumentamos la cantidad
  //   if(productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // producto no esta en el carrtio
  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ]))

  // }

  // const removeFromCart = (product) => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  return (
    <CartContext.Provider value={{
      cart: state,
      addCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}