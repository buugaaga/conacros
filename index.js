
const express = require('express')
const path = require('path')
const sassMiddleware = require('node-sass-middleware')
const postcssMiddleware = require('postcss-middleware')
const autoprefixer = require('autoprefixer')
const expressAutoprefixer = require('express-autoprefixer')
const PORT = process.env.PORT || 5000
const destPath = __dirname + '/public/stylesheets'

express()
  .use(sassMiddleware({
    src: __dirname + '/scss',
    dest: destPath,
    dbug: true,
    outputStyle: 'extended',
    prefix: '/stylesheets'
  }))
  .use('/stylesheets', postcssMiddleware({
    src: function(req) {
      return path.join(__dirname, 'public', 'stylesheets', req.path);
    },
    plugins: [
      expressAutoprefixer()
    ],
    options: {
      map: {
        inline: false
      }
    },
  }))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool("")))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
