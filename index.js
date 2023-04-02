const http = require('http')
const porta = 443

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.write('Primeiro Servidor Node')
  res.end()
})
servidor.listen(porta, () => {
  console.log('Servidor Rodando')
})