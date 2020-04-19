const board = document.createElement('canvas')
board.className = 'board'
const boardSize = '300'

const state = [
  [1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
]

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

const cell = (x: number, y: number, w: number, h: number, alive?: number|boolean): void => {
  ctx.fillStyle = alive ? 'black' : 'white'
  ctx.fillRect(x, y, w, h)
}

const draw = (): void => {
  // TODO: draw the board
  cell(0, 0, 50, 50, 1)
  cell(50, 0, 50, 50, 1)
  cell(100, 0, 50, 50, 1)
  window.requestAnimationFrame(draw)
}

const init = (): void => {
  window.requestAnimationFrame(draw)
}
init()

export default board