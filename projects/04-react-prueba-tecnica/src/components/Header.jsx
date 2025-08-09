export function Header ({ handleClick }) {
  return (
    <header>
      <h1>
        React - Prueba Técnica
      </h1>
      <h2>
        App de Gatitos
      </h2>
      <button onClick={handleClick}>
        Get new fact
      </button>
    </header>
  )
}
