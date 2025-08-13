import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import { CartItem } from './CartItem'
import { useCart } from '../hooks/useCart'

export function Cart() {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />

      <aside className="cart">
        <ul>
          {
            cart.map(product => (
              <CartItem 
                key={product.id}
                {...product} 
                addToCart={() => addCart(product)} 
              />
            ))
          }
        </ul>
        <footer>
          {
            cart.length > 0 && (
              <button onClick={clearCart}>
                <ClearCartIcon />
              </button>
            )
          }
        </footer>
      </aside>
    </>
  )
}