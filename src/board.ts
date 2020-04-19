import { nextIteration } from './utils'

const board = document.createElement('canvas')

let state = [
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
]

const nextState = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]



// const nextIteration = (
//   state: StateType, nextState: StateType): StateType => {

//     // run over the function

//     return nextState
// }

board.className = 'board'
const boardSize = '300'
const cellNumber = state.length
const cellSize = +boardSize / cellNumber

const resizeBoard = (): void => {
  const windowMid = window.innerWidth/2
  const boardMid = +boardSize/2
  const midPoint = `${windowMid-boardMid}px`
  board.setAttribute('width', boardSize)
  board.setAttribute('height', boardSize)
  board.style.marginLeft = midPoint
}

resizeBoard()
window.onresize = resizeBoard

const ctx = board.getContext('2d')

const cell = (x: number, y: number, size: number, isAlive?: number|boolean): void => {
  ctx.fillStyle = isAlive ? 'black' : 'white'
  ctx.fillRect(x, y, size, size)
}

const draw = (): void => {
  for(let col = 0; col < cellNumber ; col++) {
    for(let row = 0; row< cellNumber; row++){
      cell(row*cellSize, col*cellSize, cellSize, state[col][row])
      nextState[col][row] = nextIteration(row, col, state)
    }
  }
  state = nextState
}

const runGame = setInterval(draw, 500)

const init = (): void => {
  draw()
  runGame
}

init()

export default board