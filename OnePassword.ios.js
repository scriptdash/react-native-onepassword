'use strict';

var React = require('react-native');
var {
    NativeModules
} = React;

var NativeOnePassword = NativeModules.OnePassword;

var OnePassword = {
    isSupported() {
        return new Promise(function(resolve) {
            NativeOnePassword.isSupported(function(error) {
                resolve(!error);
            });
        });
    },

    findLogin(url) {
        return new Promise(function(resolve, reject) {
            NativeOnePassword.findLogin(url, function(error, data) {
                if (error) {
                    return reject(error.message);
                }

                resolve(data);
            });
        });
    }
};

module.exports = OnePassword;
