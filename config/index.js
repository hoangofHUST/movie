const defu = require('defu')
const defaults = require('./default')
const environment = require('./' + (process.env.NODE_ENV || 'development'))

module.exports = defu(environment, defaults)
