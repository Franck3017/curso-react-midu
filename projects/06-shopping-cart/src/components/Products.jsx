import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function ProductList({ products }) {
  const { addCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <span>${product.price}</span>
              <img src={product.thumbnail} alt={product.title} />
              <button
                onClick={() => isProductInCart
                  ? removeFromCart(product)
                  : addCart(product)}
                style={{
                  backgroundColor: isProductInCart 
                    ? 'red' 
                    : '#09f',
                }}
              >
                {
                  isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                }
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}