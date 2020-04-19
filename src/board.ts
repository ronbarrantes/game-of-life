const board = document.createElement('canvas')

const state = [
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

board.className = 'board'
const boardSize = '400'
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
  for(let cols = 0; cols < cellNumber ; cols++) {
    for(let rows = 0; rows< cellNumber; rows++){
      cell(rows*cellSize, cols*cellSize, cellSize,
        state[cols][rows],
        // Math.floor(Math.random() * 2),
      )
    }
  }
}

const runGame = setInterval(draw, 500)

const init = (): void => {
  draw()
  runGame
}

init()

export default board