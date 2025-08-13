import { Filters } from './Filter'

// export function Header ({ changeFilter }) {
export function Header() {
  return (
    <header>
      <h1>Shopping Cart</h1>
      <Filters />
      {/* <Filters onChange={changeFilter} /> */}
    </header>
  )
}