/*
  node main.js
*/

const logger1 = require('./logger1')
const logger2 = require('./logger2')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')
