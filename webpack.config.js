'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  // or production
  entry: './src/js/script.js',
  //файл-сборщик всех зависимостей
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  watch: true,
//в режиме watch все изменения сразу компилируются, без него нужно каждый раз запускать npx webpack
  devtool: "source-map",
// карта того, как ориентироваться в сжатом js-файле
  module: {}
};
