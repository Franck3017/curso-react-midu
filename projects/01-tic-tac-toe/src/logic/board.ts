import { WINNERS_COMBOS } from "../constants"

export const checkWinner = (checkToBoard: string[]) => {
  for (const combo of WINNERS_COMBOS as number[][]) {
    const [a, b, c] = combo

    if (checkToBoard[a]
      && checkToBoard[a] === checkToBoard[b]
      && checkToBoard[a] === checkToBoard[c]
    ) {
      return checkToBoard[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard: string[]) => {
  // Verificar si hay un empate
  // Si no hay espacios vacios
  // en el tablero
  return newBoard.every(square => square !== null)
}