var express = require('express');
var router = express.Router();
var helpers = require('../helpers/webhooks')
router.route('/list')
    .get(helpers.getWebHooks)
router.route('/register')
    .post(helpers.createWebHook)
router.route('/list/:webhookId')
    .get(helpers.getWebHook)
router.route('/update/:webhookId')
    .put(helpers.updateWebHook)
router.route('/delete/:webhookId')
    .delete(helpers.deleteWebHook)
router.route('/ip')
    .post(helpers.postip)
    .get(helpers.getip)
module.exports = router;