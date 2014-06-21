'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  root: rootPath,
  ip: '0.0.0.0',
  port: process.env.PORT || 9000,
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },
  passport: {
    facebook: {
      clientId:821832544496595,
      clientSecret:'42f719a3864c936224ac4b8ad578af5b',
      callbackUrl:'http://localhost:9000/auth/facebook/callback'
    }
  }
};