var express = require('../node_modules/express');
var router = express.Router();
var jwt = require('../node_modules/jsonwebtoken');
var log4js = require('../node_modules/log4js/lib/log4js');
var logger = log4js.getLogger('blockytRestApi');
const fs = require('fs');
const path = require('path');
const ccpPath = path.resolve(__dirname, '..', 'network_config.json');
const ccpJSON = fs.readFileSync(ccpPath, 'utf8');
const cp = JSON.parse(ccpJSON);
var invoke = require('../app/invoke.js');
var querytranns = require('../app/query.js');
var ObjectID = require('mongodb').ObjectID;
const passport = require('passport');
var moment = require('moment');
var motherboardschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Manufacturer_id", "required": true, "in": "body", "type": "string", "description": "Manufacturer_id" }, { "name": "Configuration", "required": true, "in": "body", "type": "string", "description": "Configuration", "isEncrypt": false }, { "name": "Compatibility", "required": true, "in": "body", "type": "string", "description": "Compatibility", "isEncrypt": false }, { "name": "Version", "required": true, "in": "body", "type": "string", "description": "Version", "isEncrypt": false }, { "name": "Processor", "required": true, "in": "body", "type": "string", "description": "Processor", "isEncrypt": false }, { "name": "ManufacturedOn", "required": true, "in": "body", "type": "string", "description": "ManufacturedOn", "isEncrypt": false }]


router.post('/assetapi/motherboard/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    req.body.CreatedOn = moment(new Date()).format();
    req.body.CreatedBy = req.user.userName;
    let message = await invoke.invokeTransaction(cp, 'common', 'motherboard', 'create', req, motherboardschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/assetapi/motherboard/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'motherboard', 'get', req, motherboardschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/assetapi/motherboard/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    req.body.CreatedOn = moment(new Date()).format();
    req.body.CreatedBy = req.user.userName;
    let message = await invoke.invokeTransaction(cp, 'common', 'motherboard', 'update', req, motherboardschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.delete('/assetapi/motherboard/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'motherboard', 'delete', req, motherboardschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.get('/assetapi/motherboard/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'motherboard', 'history', req, motherboardschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/assetapi/motherboard/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'motherboard', 'querystring', req, motherboardschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
module.exports = router;