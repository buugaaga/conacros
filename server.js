
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'dist', 'public')))
  .set('views', path.join(__dirname, 'dist', 'views'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
