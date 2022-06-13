const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const mongoose    = require('mongoose');
const keys        = require('../config/keys');
const ObjectID = require('mongodb').ObjectID;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey    = keys.secretOrKey;
module.exports =  passport => {
    passport.use(new JwtStrategy(opts,(jwt_payload, done)=>{
        var mongodb = global.db;
        var query =  { "_id": ObjectID(jwt_payload.id)} ;
        mongodb.collection("users").findOne(query).then(exiRes =>{
            if(exiRes){
                return done(null,exiRes);
            }
            return done(null,false);
        })
    })
)}


