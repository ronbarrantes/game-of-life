import { nextIteration } from './next-iteration'
import { randomState } from './utils'
const board = document.createElement('canvas')

let state = randomState(350 / 2)

board.className = 'board'
const boardSize = 700
const cellNumber = state.length
const cellSize = boardSize / cellNumber

const resizeBoard = (): void => {
  const windowMid = window.innerWidth / 2
  const boardMid = boardSize / 2
  const midPoint = `${windowMid - boardMid}px`
  board.setAttribute('width', `${boardSize}`)
  board.setAttribute('height', `${boardSize}`)
  board.style.marginLeft = midPoint
}
resizeBoard()
window.onresize = resizeBoard

const ctx = board.getContext('2d')
const cell = (x: number, y: number, size: number, isAlive?: number): void => {
  ctx.fillStyle = isAlive ? 'black' : 'white'
  ctx.fillRect(x, y, size, size)
}

const draw = (): void => {
  const nextState = []
  for (let col = 0; col < cellNumber; col++) {
    nextState.push(new Array(state.length).fill(0))
    for (let row = 0; row < cellNumber; row++) {
      cell(row * cellSize, col * cellSize, cellSize, state[col][row])
      nextState[col][row] = nextIteration(row, col, state) ? 1 : 0
    }
  }
  state = nextState
}

const runGame = setInterval(draw, 100)

const init = (): void => {
  draw()
  runGame
}

init()
export default board
