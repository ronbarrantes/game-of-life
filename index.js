const express = require('express')

const port = process.env.PORT || 3000

express()
  .use(require('morgan')('common'))
  .use(express.static(`${__dirname}/dist`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))
  .listen(port, () => {
    console.log('Server Up @', port)
  })
