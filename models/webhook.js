var mongoose = require('mongoose')
var webHookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
var webhook = mongoose.model('WebHook', webHookSchema);
module.exports = webhook;