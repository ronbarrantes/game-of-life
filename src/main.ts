import 'reset-css'
import './styles/main.scss'
import * as utils from './utils'

import title from './title'
import board from './board'

const container = document.createElement('div')

utils.appendMultiple(container)(title, board)

// container.appendChild(title)
// container.appendChild(board)

container.className = 'root'
document.body.appendChild(container)
