const board = document.createElement('canvas')
board.className = 'board'

// const text = 'hello at the canvas'
const ctx = board.getContext('2d')

ctx.fillStyle = 'green'
ctx.fillRect(10, 10, 150, 100)

export default board