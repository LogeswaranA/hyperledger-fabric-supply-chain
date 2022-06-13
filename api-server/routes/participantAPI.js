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
var register = require('../app/registerUser.js');
const passport = require('passport');

var warehouseschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "Participant_id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Warehousename", "required": true, "in": "body", "type": "string", "description": "Warehousename", "isEncrypt": false }, { "name": "Warehouse_addr", "required": true, "in": "body", "type": "string", "description": "Warehouse_addr", "isEncrypt": false }, { "name": "City", "required": true, "in": "body", "type": "string", "description": "City", "isEncrypt": false }, { "name": "Pincode", "required": true, "in": "body", "type": "string", "description": "Pincode", "isEncrypt": false }]


router.post('/participantapi/warehouse/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'warehouse', 'create', req, warehouseschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/participantapi/warehouse/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'warehouse', 'get', req, warehouseschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/participantapi/warehouse/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'warehouse', 'update', req, warehouseschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.delete('/participantapi/warehouse/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'warehouse', 'delete', req, warehouseschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.get('/participantapi/warehouse/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'warehouse', 'history', req, warehouseschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/participantapi/warehouse/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'warehouse', 'querystring', req, warehouseschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var enrollschema = [{ "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "The ID for the participant.\n" }, { "name": "PIN", "required": true, "in": "body", "type": "string", "description": "The MPIN for the participant.\n" }]


router.post('/participantapi/warehouse/enroll', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await register.registerUserParticipant(cp, 'undefinedMSP', 'undefined', 'department1', 'undefined', 'wallet', req, enrollschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var manufacturerschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "Participant_id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Name", "required": true, "in": "body", "type": "string", "description": "Name", "isEncrypt": false }, { "name": "Address", "required": true, "in": "body", "type": "string", "description": "Address", "isEncrypt": false }, { "name": "License", "required": true, "in": "body", "type": "string", "description": "License", "isEncrypt": false }, { "name": "Country", "required": true, "in": "body", "type": "string", "description": "Country", "isEncrypt": false }, { "name": "Expiry", "required": true, "in": "body", "type": "string", "description": "Expiry", "isEncrypt": false }]


router.post('/participantapi/manufacturer/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'manufacturer', 'create', req, manufacturerschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/participantapi/manufacturer/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'manufacturer', 'get', req, manufacturerschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/participantapi/manufacturer/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'manufacturer', 'update', req, manufacturerschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.delete('/participantapi/manufacturer/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'manufacturer', 'delete', req, manufacturerschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.get('/participantapi/manufacturer/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'manufacturer', 'history', req, manufacturerschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/participantapi/manufacturer/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'manufacturer', 'querystring', req, manufacturerschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var enrollschema = [{ "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "The ID for the participant.\n" }, { "name": "PIN", "required": true, "in": "body", "type": "string", "description": "The MPIN for the participant.\n" }]


router.post('/participantapi/manufacturer/enroll', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await register.registerUserParticipant(cp, 'undefinedMSP', 'undefined', 'department1', 'undefined', 'wallet', req, enrollschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var distributorschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "Participant_id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Name", "required": true, "in": "body", "type": "string", "description": "Name", "isEncrypt": false }, { "name": "Address", "required": true, "in": "body", "type": "string", "description": "Address", "isEncrypt": false }, { "name": "License", "required": true, "in": "body", "type": "string", "description": "License", "isEncrypt": false }, { "name": "Expiry", "required": true, "in": "body", "type": "string", "description": "Expiry", "isEncrypt": false }, { "name": "Modifiedby", "required": true, "in": "body", "type": "string", "description": "Modifiedby", "isEncrypt": false }]


router.post('/participantapi/distributor/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'distributor', 'create', req, distributorschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/participantapi/distributor/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'distributor', 'get', req, distributorschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/participantapi/distributor/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'distributor', 'update', req, distributorschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.delete('/participantapi/distributor/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'distributor', 'delete', req, distributorschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.get('/participantapi/distributor/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'distributor', 'history', req, distributorschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/participantapi/distributor/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'distributor', 'querystring', req, distributorschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var enrollschema = [{ "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "The ID for the participant.\n" }, { "name": "PIN", "required": true, "in": "body", "type": "string", "description": "The MPIN for the participant.\n" }]


router.post('/participantapi/distributor/enroll', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await register.registerUserParticipant(cp, 'undefinedMSP', 'undefined', 'department1', 'undefined', 'wallet', req, enrollschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var logisticsschema = [{ "name": "Id", "required": true, "in": "body", "type": "string", "description": "Id", "isEncrypt": false }, { "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "Participant_id", "isEncrypt": false }, { "name": "CreatedOn", "required": true, "in": "body", "type": "string", "description": "CreatedOn", "isEncrypt": false }, { "name": "CreatedBy", "required": true, "in": "body", "type": "string", "description": "CreatedBy", "isEncrypt": false }, { "name": "IsDelete", "required": true, "in": "body", "type": "boolean", "description": "IsDelete", "isEncrypt": false }, { "name": "Name", "required": true, "in": "body", "type": "string", "description": "Name", "isEncrypt": false }, { "name": "Address", "required": true, "in": "body", "type": "string", "description": "Address", "isEncrypt": false }, { "name": "Location", "required": true, "in": "body", "type": "string", "description": "Location", "isEncrypt": false }, { "name": "TruckType", "required": true, "in": "body", "type": "string", "description": "TruckType", "isEncrypt": false }, { "name": "TruckNumber", "required": true, "in": "body", "type": "string", "description": "TruckNumber", "isEncrypt": false }]


router.post('/participantapi/logistics/create', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'logistics', 'create', req, logisticsschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.get('/participantapi/logistics/get/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'logistics', 'get', req, logisticsschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.put('/participantapi/logistics/update', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'logistics', 'update', req, logisticsschema);
    if (message && message.status == true) {
        res.send(message);
    }
    else {
        res.send(message);
    }
});
router.delete('/participantapi/logistics/delete', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await invoke.invokeTransaction(cp, 'common', 'logistics', 'delete', req, logisticsschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.get('/participantapi/logistics/history/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'logistics', 'history', req, logisticsschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
router.post('/participantapi/logistics/querystring', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await querytranns.query(cp, 'common', 'logistics', 'querystring', req, logisticsschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});

var enrollschema = [{ "name": "Participant_id", "required": true, "in": "body", "type": "string", "description": "The ID for the participant.\n" }, { "name": "PIN", "required": true, "in": "body", "type": "string", "description": "The MPIN for the participant.\n" }]


router.post('/participantapi/logistics/enroll', passport.authenticate('jwt', { session: false }), async (req, res) => {
    let message = await register.registerUserParticipant(cp, 'undefinedMSP', 'undefined', 'department1', 'undefined', 'wallet', req, enrollschema);
    if (message && message.status == true) { res.send(message); }
    else { res.send(message); }
});
module.exports = router;