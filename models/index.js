var mongoose = require('mongoose');
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/webhook-api')
mongoose.Promise = Promise
module.exports.WebHook = require("./webhook");