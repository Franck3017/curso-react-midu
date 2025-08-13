// import { useState } from 'react';
import './Filters.css'
import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';

// export function Filters({ onChange }) {
export function Filters () {
  const { filters, setFilters } = useFilters()
  // const [minPrice, setMinPrice] = useState(0) // <- Estado local
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChange = (event) => {
    // setMinPrice(event.target.value)
    // Esto huele mal 🤮
    // Dos fuentes de la verdad
    // Con lo cual hay dos estados tanto el local y el global
    // que se están repitiendo 2 veces
    // En React debe de ver una sola fuente de la verdad
    // En este caso el estado global
    setFilters(previousValue => ({
      ...previousValue,
      minPrice: event.target.value
    }))
  }

  const changeCategory = (event) => {
    // Esto huele mal 🤮
    // se esta pasando la función de actualizar el estado
    // nativa de React a un componente hijo
    setFilters(previousValue => ({
      ...previousValue,
      category: event.target.value
    }))
  }

  return (
    <section className="filters" aria-label="Filtros de productos">
      <div>
        <label htmlFor={categoryFilterId}>Categoría:</label>
        <select id={categoryFilterId} name="category" onChange={changeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>

      <div>
        <label htmlFor={minPriceFilterId}>Precio mínimo:</label>
        <input
          type="range"
          id={minPriceFilterId}
          name="min-price"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChange}
        />
        <span>${filters.minPrice}</span>
      </div>
    </section>
  );
}
