
interface SquareProps {
  children: string
  index: number
  updateBoard: (index: number) => void
  isSelected?: boolean
}

export function Square({ children, index, updateBoard, isSelected = false }: SquareProps) {
  const className = isSelected ? 'square is-selected' : 'square'

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
