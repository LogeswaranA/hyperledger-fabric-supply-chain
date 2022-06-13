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

var purchaseorderschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Warehouse_id", "required": true, "in": "body", "type": "string", "description": "Warehouse_id" }, { "name": "Motherboard_id", "required": true, "in": "body", "type": "string", "description": "Motherboard_id" }, { "name": "PONumber", "required": true, "in": "body", "type": "string", "description": "PONumber", "isEncrypt": false }, { "name": "POPlacedBy", "required": true, "in": "body", "type": "string", "description": "POPlacedBy", "isEncrypt": false }, { "name": "TotalUnits", "required": true, "in": "body", "type": "string", "description": "TotalUnits", "isEncrypt": false }, { "name": "PricePerUnit", "required": true, "in": "body", "type": "string", "description": "PricePerUnit", "isEncrypt": false }]


router.post('/transactionapi/purchaseorder/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'purchaseorder', 'create', req, purchaseorderschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/transactionapi/purchaseorder/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'purchaseorder', 'get', req, purchaseorderschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.delete('/transactionapi/purchaseorder/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'purchaseorder', 'delete', req, purchaseorderschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/transactionapi/purchaseorder/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'purchaseorder', 'update', req, purchaseorderschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/transactionapi/purchaseorder/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'purchaseorder', 'history', req, purchaseorderschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/transactionapi/purchaseorder/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'purchaseorder', 'querystring', req, purchaseorderschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var proformainvoiceschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Manufacturer_id", "required": true, "in": "body", "type": "string", "description": "Manufacturer_id" }, { "name": "Motherboard_id", "required": true, "in": "body", "type": "string", "description": "Motherboard_id" }, { "name": "PINumber", "required": true, "in": "body", "type": "string", "description": "PINumber", "isEncrypt": false }, { "name": "PONumber", "required": true, "in": "body", "type": "string", "description": "PONumber", "isEncrypt": false }, { "name": "ShipmentDate", "required": true, "in": "body", "type": "string", "description": "ShipmentDate", "isEncrypt": false }]


router.post('/transactionapi/proformainvoice/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'proformainvoice', 'create', req, proformainvoiceschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/transactionapi/proformainvoice/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'proformainvoice', 'get', req, proformainvoiceschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.delete('/transactionapi/proformainvoice/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'proformainvoice', 'delete', req, proformainvoiceschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/transactionapi/proformainvoice/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'proformainvoice', 'update', req, proformainvoiceschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/transactionapi/proformainvoice/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'proformainvoice', 'history', req, proformainvoiceschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/transactionapi/proformainvoice/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'proformainvoice', 'querystring', req, proformainvoiceschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var shippingschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Logistics_id", "required": true, "in": "body", "type": "string", "description": "Logistics_id" }, { "name": "Motherboard_id", "required": true, "in": "body", "type": "string", "description": "Motherboard_id" }, { "name": "PINumber", "required": true, "in": "body", "type": "string", "description": "PINumber", "isEncrypt": false }, { "name": "PONumber", "required": true, "in": "body", "type": "string", "description": "PONumber", "isEncrypt": false }, { "name": "Source", "required": true, "in": "body", "type": "string", "description": "Source", "isEncrypt": false }, { "name": "Destination", "required": true, "in": "body", "type": "string", "description": "Destination", "isEncrypt": false }, { "name": "TruckId", "required": true, "in": "body", "type": "string", "description": "TruckId", "isEncrypt": false }, { "name": "DriverName", "required": true, "in": "body", "type": "string", "description": "DriverName", "isEncrypt": false }]


router.post('/transactionapi/shipping/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'shipping', 'create', req, shippingschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/transactionapi/shipping/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'shipping', 'get', req, shippingschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.delete('/transactionapi/shipping/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'shipping', 'delete', req, shippingschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/transactionapi/shipping/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'shipping', 'update', req, shippingschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/transactionapi/shipping/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'shipping', 'history', req, shippingschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/transactionapi/shipping/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'shipping', 'querystring', req, shippingschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
module.exports = router;