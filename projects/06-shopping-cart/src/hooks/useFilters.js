import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const {filters, setFilters}= useContext(FiltersContext)
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const filteredProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  return { filters, setFilters, filteredProducts }
}