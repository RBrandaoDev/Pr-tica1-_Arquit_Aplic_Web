const express = require('express')
const ddsbc = express()
const consign = require('consign')

ddsbc.set('view engine', 'ejs')
ddsbc.set('views', './src/views')

consign()
  .include('src/routes')
  .then('src/models')
  .then('src/controllers')
  .into(ddsbc)

/*
ddsbc.get('/', (req, res) => {
  return res.json({ Banco: 'Renan Brandão.' })
})
*/

// servidor rodando na porta 3001 retornando uma função void (Vazia).
ddsbc.listen(3002, function () {
  console.log('Servidor ativo')
})
