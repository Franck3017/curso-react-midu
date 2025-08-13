import { useState } from 'react'
import { ProductList } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/Cart'


function App() {
  const [products] = useState(initialProducts)
  const hasProducts = initialProducts.length > 0
  const { filteredProducts } = useFilters()

  const filteredProductsList = filteredProducts(products)

  return (
    <CartProvider>
      {/* <Header changeFilter={setFilters} /> */}
      <Header />
      <Cart />
      {
        hasProducts ? (
          <ProductList products={filteredProductsList} />
        ) : (
          <p>No products in the cart</p>
        )
      }
      <Footer />
    </CartProvider>
  )
}

export default App
