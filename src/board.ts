const board = document.createElement('canvas')
board.className = 'board'

const resizeBoard = (): void => {
  const boardSize = '300'
  const windowMid = window.innerWidth/2
  const boardMid = +boardSize/2
  const midPoint = `${windowMid-boardMid}px`
  board.setAttribute('width', boardSize)
  board.setAttribute('height', boardSize)
  board.style.marginLeft = midPoint
  console.log(window.innerWidth)
}

resizeBoard()

window.onresize = resizeBoard

const ctx = board.getContext('2d')

const draw = (): void => {
  window.requestAnimationFrame(draw)
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 100, 100)

  ctx.fillStyle = 'red'
  ctx.fillRect(100, 0, 100, 100)

  ctx.fillStyle = 'blue'
  ctx.fillRect(200, 0, 100, 100)
}

const init = (): void => {
  window.requestAnimationFrame(draw)
}

init()

export default board