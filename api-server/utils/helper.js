'use strict';
var log4js = require('log4js');
var logger = log4js.getLogger('Helper');
logger.level = 'DEBUG';

var getLogger = function(moduleName) {
	var logger = log4js.getLogger(moduleName);
    logger.level = 'DEBUG';
	return logger;
};

exports.getLogger = getLogger;
