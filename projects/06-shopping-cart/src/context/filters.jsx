import { useState } from 'react'
import { createContext } from 'react'

// Crear el contexto y consumir el contexto
export const FiltersContext = createContext()

// Proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}