import 'reset-css'
import './styles/main.css'

const hello = document.createElement('h1')
hello.innerText = 'Hello from ts'

// const canvasObj = document.createElement('canvas')
const container = document.createElement('div')

container.appendChild(hello)
// container.appendChild(canvasObj)

container.className = 'root'
document.body.appendChild(container)
