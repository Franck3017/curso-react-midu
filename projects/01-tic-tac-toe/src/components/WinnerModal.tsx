import { Square } from "./Square"

interface WinnerModalProps {
    winner: string | null | boolean
    resetGame: () => void
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  if (winner === null) return null
  const winnerText = winner === false ? 'Empate' : 'El ganador: '

  return (
    <section className="winner">
      <div className="text">
        <h2>
          {winnerText}
        </h2>
        <header className="win">
          {
            winner && <Square>{winner}</Square>
          }
        </header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}