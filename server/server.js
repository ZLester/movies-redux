var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

const MOVIES = [
  {title:"Godfather", description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", favorite: false},
  {title:"Departed", description:"An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.", favorite: false},
  {title:"Blow", description:"The story of George Jung, the man who established the American cocaine market in the 1970s.", favorite: false},
  {title:"Goodfellas", description:"Henry Hill and his friends work their way up through the mob hierarchy.", favorite: false}
]

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', "Origin, X-Access-Token, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(__dirname + '/../build'));

var data = 'I am data';

app.get('/movies', function(req, res){
  res.send(MOVIES);
});

app.listen(8000);
