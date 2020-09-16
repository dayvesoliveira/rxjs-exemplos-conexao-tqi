const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.use('/exemples', express.static(path.join(__dirname, '/src/exemples'), 
{ extensions: ['htm', 'html'] }));

app.listen(config.devServer.port, function () {
  console.log('Example app listening on port 4200!\n');
});