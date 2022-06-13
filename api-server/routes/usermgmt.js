const express = require("express");
var router = express.Router();
const bodyparser = require("body-parser");
const { registerUser } = require("../app/registerUser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const helper = require('../utils/helper');

const passport = require('passport');
var moment = require('moment');

var logger = helper.getLogger("Routes");

router.post("/register", async function (req, res) {

  var username = req.body.username;
  var orgName = req.body.orgName;
  var role = req.body.role;
  var usermail = req.body.email;
  var userdesc = req.body.desc;
  var created_on = moment(new Date()).format();
  var modifed_on = moment(new Date()).format();
  var modifed_by = "Admin";

  var mongodb = global.db;
  logger.debug("User name : " + username);
  logger.debug("Org name  : " + orgName);
  logger.debug("Role  : " + role);
  if (!username) {
    res.json(getErrorMessage("'username'"));
    return;
  }
  if (!orgName) {
    res.json(getErrorMessage("'orgName'"));
    return;
  }
  mongodb.collection("users").find({ userName: req.body.username }).toArray(async function (err, exiRes) {
    console.log("exiRes", exiRes)
    if (exiRes.length > 0) {

      return res.status(200).json({ success: false, message: 'User Already Exists' });
    } else {

      let response = await registerUser({ OrgMSP: orgName, userId: username });

      logger.debug("response is  : " + response);

      logger.debug(
        "-- returned from registering the username %s for organization %s",
        username,
        orgName
      );
      if (response && typeof response !== "string") {
        logger.debug(
          "Successfully registered the username %s for organization %s",
          username,
          orgName
        );

        const salt = await bcrypt.genSalt(10);
        var hashedpassword = await bcrypt.hash(req.body.password, salt);

        var newusers = {
          userName: req.body.username,
          status: 'Active',
          role: req.body.role,
          org: req.body.orgName,
          password: hashedpassword,
          usermail: usermail,
          created_on: created_on,
          modified_on: modifed_on,
          modified_by: modifed_by,
          userdesc: userdesc
        };

        var userlogs = {
          userName: req.body.username,
          status: "Active",
          role: req.body.role,
          userdesc: req.body.userdesc,
          usermail: req.body.usermail,
          modified_on: modifed_on,
          modified_by: modifed_by
        };

        mongodb.collection("users").insertOne(newusers).then(result => {
          console.log("result is", result, result["ops"][0]["_id"])
          if (result) {
            mongodb.collection("userlogs").insertOne(userlogs).then(result1 => {
              return res.status(200).json({ success: true, message: 'User Registered Successfully' });
            });
          }
        });

      } else {
        logger.debug(
          "Failed to register the username %s for organization %s with::%s",
          username,
          orgName,
          response
        );
        res.json({
          success: false,
          message: response
        });
      }
    }
  });
});


router.post('/login', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;

  var mongodb = global.db;
  var query = { $and: [{ userName: req.body.username }, { status: "Active" }] };
  //Find the user by username
  mongodb.collection("users").findOne(query).then(exiRes => {
    //Check for user
    if (exiRes) {
      //Check password
      bcrypt.compare(password, exiRes.password)
        .then(isMatch => {
          if (isMatch) {
            //User matched
            const payload = { id: exiRes._id, userName: exiRes.userName, role: exiRes.role, msp: exiRes.org };//Create JWT Payload
            console.log("payLoad", payload)
            //Sign Token
            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600000 }, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              })
            });
          } else {
            return res.status(200).json({ success: false, message: "Password Incorrect" });
          }
        });
    } else {
      return res.status(200).json({ success: false, message: "User not found" });
    }
  });
});

router.post('/userList', passport.authenticate('jwt', { session: false }), (req, res) => {
  var mongodb = global.db;

  //var query = {status:"Active"};
  console.log("Iam in userlist", req.user.userName)
  mongodb.collection("users").find({}).toArray(async function (err, exiRes) {
    if (exiRes.length > 0) {
      response = { "success": true, "message": exiRes };
      return res.status(200).json(response);
    } else {
      response = { "success": false, "message": "No Active user exists" };
      res.status(200).json(response);
    }
  });
});

router.post('/changePassword', passport.authenticate('jwt', { session: false }), async (req, res) => {
  var mongodb = global.db;
  var modifed_on = moment(new Date()).format();
  var modifed_by = req.user.userName;
  const salt = await bcrypt.genSalt(10);
  var hashedpassword = await bcrypt.hash(req.body.newpassword, salt);
  var query = { "userName": req.body.username };
  var newValues = { $set: { "password": hashedpassword, "modified_on": modifed_on, "modified_by": modifed_by } };
  mongodb.collection("users").updateOne(query, newValues, function (err, exiRes) {
    if (exiRes['result'].n > 0) {
      response = { "success": true, "message": "Password changed successfully for the given user" };
      res.status(200).json(response);
    } else {
      response = { "success": false, "message": "No Such User Exists or Operation Failed" };
      res.status(200).json(response);
    }
  });
});


router.post('/editUser', passport.authenticate('jwt', { session: false }), (req, res) => {
  var mongodb = global.db;
  var query = { "userName": req.body.username };
  var modifed_on = moment(new Date()).format();
  var modifed_by = req.user.userName;
  var newValues = { $set: { "role": req.body.role, "status": req.body.newstatus, "modified_on": modifed_on, "modified_by": modifed_by, "userdesc": req.body.userdesc, "usermail": req.body.usermail } };

  var userlogs = {
    userName: req.body.username,
    status: req.body.newstatus,
    role: req.body.role,
    userdesc: req.body.userdesc,
    usermail: req.body.usermail,
    modified_on: modifed_on,
    modified_by: modifed_by
  };

  mongodb.collection("users").updateOne(query, newValues, function (err, exiRes) {
    if (exiRes['result'].n > 0) {
      mongodb.collection("userlogs").insertOne(userlogs).then(result => {
        response = { "success": true, "message": "Edited & Saved successfully for the given user" };
        res.status(200).json(response);
      });
    } else {
      response = { "success": false, "message": "No Such User Exists" };
      res.status(200).json(response);
    }
  });

});

module.exports = router;
