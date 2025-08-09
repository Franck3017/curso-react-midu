import { useState } from "react"
import confetti from "canvas-confetti"
import { WinnerModal } from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { Board } from './components/Board'
import { HeaderBoard } from './components/HeaderBoard'
import { TurnIndicator } from './components/TurnIndicator'

export default function App() {
  // los hooks siempre deben ir en el cuerpo del componente
  // nunca pueden ir dentro de una condición o bucle
  // porque React guarda la posición de los hooks
  // en un array interno en memoria
  // si se pone dentro de una condición o bucle
  // React no sabe cuál es el hook
  // ya que pierde la posición de los hooks
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) // Array(9).fill(null) crea un array de 9 posiciones con valores null
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState<string | null | boolean>(null) // el null = no hay ganador, false = empate, X/O = ganador

  // Resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  // Actualizar el tablero
  const updateBoard = (index: number) => {
    // No actualizar si ya hay un valor
    if (board[index] || winner) return
    // No se debe mutar las props ni el estado
    // Crear un nuevo tablero a partir del tablero actual con el [...spread operator]
    const newBoard = [...board]
    // En cada posición del tablero se va a guardar el turno
    newBoard[index] = turn
    // Actualizar el tablero con el nuevo tablero
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    // Actualizar el turno con el nuevo turno
    setTurn(newTurn)
    // Guardar la partida en localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard)) // Guardar el tablero en localStorage
    window.localStorage.setItem('turn', newTurn) // Guardar el turno en localStorage
    // Verificar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti() // Mostrar confetti
      setWinner(newWinner) // La actualización del estado es asíncrono
    } else if (checkEndGame(newBoard)) { // Si no hay ganador
      setWinner(false) // Empate
    }
  }

  return (
    <main className="board">
      <HeaderBoard resetGame={resetGame} />
      <Board board={board} updateBoard={updateBoard} />
      <TurnIndicator turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}