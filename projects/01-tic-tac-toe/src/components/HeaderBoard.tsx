export function HeaderBoard({ resetGame }: { resetGame: () => void }) {
  return (
    <header className="header">
      <h1>Tic, Tac, Toe</h1>
      <button onClick={resetGame}>Resetear el juego</button>
    </header>
  )
}