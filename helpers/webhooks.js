var db = require('../models')
exports.getWebHooks = (req, res) => {
    db.WebHook.find()
        .then(function(hooks) {
            res.json(hooks)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.createWebHook = (req, res) => {
    db.WebHook.create(req.body)
        .then(function(newhook) {
            res.json(newhook._id)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.getWebHook = (req, res) => {
    db.WebHook.findById(req.params.webhookId)
        .then(function(foundhook) {
            res.json(foundhook)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.updateWebHook = (req, res) => {
    db.WebHook.findOneAndUpdate({ _id: req.params.webhookId }, req.body, { new: true })
        .then(function(hook) {
            res.json(hook)
        })
        .catch(function(err) {
            res.send(err)
        })
}
exports.deleteWebHook = (req, res) => {
    db.WebHook.remove({ _id: req.params.webhookId })
        .then(function() {
            res.json({ message: 'We deleted it' })
        })
        .catch(function(err) {
            res.send(err)
        })
}

exports.postip = (req, res) => {
    const ip = (req.headers['x-forward-for'] || '').split(',').pop().trim() || req.socket.remoteAddress;
    res.json(ip);


}
exports.getip = (req, res) => {
    db.WebHook.find()
        .then(function(hooks) {
            res.json(hooks)
        })
        .catch(function(err) {
            res.send(err)
        })
}
module.exports = exports;