import 'reset-css'
import './styles/main.scss'
import * as utils from './utils'

import title from './title'
import board from './board'

const container = document.createElement('div')
container.className = 'root'

utils.appendMultiple(container)(title, board)

document.body.appendChild(container)
