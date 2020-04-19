
type BoardState = Array<Array<number|boolean>>

interface NextIteration {
  (x: number, y: number, board: BoardState): number;
}

export const appendMultiple = (parent: HTMLElement) =>
  (...children: Array<HTMLElement>): void => {
    children.forEach(child => parent.appendChild(child))
  }

export const nextIteration: NextIteration = (x, y, board ) => {
  let neighbors = 0

  return 0
}