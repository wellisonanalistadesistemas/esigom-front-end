// Adicionando servidore express para executar build através da porta 4000

const html = __dirname + '/dist/browser/';

const port = process.env.PORT || 4000;

// Express
const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
var app = express();

// Opções que podem ser passadas como parametro  
//var options = {
//   dotfiles: 'ignore',
//   etag: true,
//   extensions: ['htm', 'html'],
//   index: 'index.html',
//   lastModified: true,
//   maxAge: '1d',
//   setHeaders: function (res, path, stat) {
//     res.set('x-timestamp', Date.now());
//     res.header('Cache-Control', 'public, max-age=1d');
//   }
// };

var options = {}

app
  .use(compression())
  .use(bodyParser.json())

// Static content
app.use('/', express.static(html, options));
app.use('*', express.static(html, options));

// Start server
app.listen(port, function () {
  console.log('Port: ' + port);
  console.log('Html: ' + html);
});

