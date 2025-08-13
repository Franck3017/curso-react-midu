// import { useCart } from '../hooks/useCart'
// import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  // const { filters } = useFilters()
  // const { cart } = useCart()

  return (
    <footer className="footer" aria-label="Pie de página">
      <p>
        Made with ❤️ by <a href="https://github.com/Frances">Frances</a>
      </p>
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
    </footer>
  )
}
