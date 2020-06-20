interface NextIteration {
  (x: number, y: number, board: number[][]): boolean;
}

export const nextIteration: NextIteration = (row, col, board) => {
  let neighbors = 0
  const currCell = board[col][row]

  for (let innerCol = -1; innerCol < 2; innerCol++) {
    for (let innerRow = -1; innerRow < 2; innerRow++) {
      const currRow = row + innerRow
      const currCol = col + innerCol

      if (
        currCol < 0 ||
        currRow < 0 ||
        currCol >= board.length ||
        currRow >= board.length
      ) {
        continue
      }

      if (innerCol === 0 && innerRow === 0) continue

      neighbors += board[currCol][currRow]
      if (neighbors > 3) return false
    }
  }

  // IF CELL IS POPULATED
  if (currCell === 1) {
    if (neighbors === 2 || neighbors === 3) return true
    if (neighbors < 2) return false
    if (neighbors > 3) return false
  }
  // IF CELL IS EMPTY
  if (currCell === 0 && neighbors === 3) return true
}
