interface Turn {
  X: string
  O: string
}

interface WinnerCombo {
  [key: number]: number[]
}

export const TURNS: Turn = {
  X: 'X',
  O: 'O',
}

export const WINNERS_COMBOS: WinnerCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]