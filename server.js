
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000



const app = express()
// обратываем файлы css и картинки
app.use(express.static(path.join(__dirname, 'dist', 'public')))
// обрабатываем страницы, используя шаблонизатор pug
app.set('views', path.join(__dirname, 'dist', 'views'))
app.set('view engine', 'pug')
app.get('/contacts', (req, res) => res.render('pages/contacts'))
app.get('/products', (req, res) => res.render('pages/products'))
app.get('/about', (req, res) => res.render('pages/about'))
app.get('/', (req, res) => res.render('pages/index'))
// прослушиваем порт
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))




