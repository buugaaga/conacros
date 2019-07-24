
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000



const app = express()
// обратываем файлы css и картинки
// app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'dist', 'public')))
// обрабатываем страницы, используя шаблонизатор pug
app.set('views', path.join(__dirname, 'dist', 'views'))
app.set('view engine', 'pug')
app.get('/', (req, res) => res.render('pages'))
// прослушиваем порт
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))




