var chai = require('chai');
const video = require('wdio-video-reporter');

exports.config = {

    suites: {

        LoginTest: [
            './test/specs/tests/logInTest.js'
        ],
    },

    hostname: process.env.HOST,
    port: parseInt(process.env.PORT),
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: process.env.BROWSER,
    }],
    logLevel: 'error',
    bail: 0,
    sync: true,
    coloredLogs: true,
    waitforTimeout: 10000,
    connectionRetryTimeout: 10000,
    connectionRetryCount: 1,
    framework: 'mocha',
    reporters: ['spec',
        [video, {
            saveAllVideos: true,
            videoSlowdownMultiplier: 10,
        }],],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: function (capabilities, specs) {
        global.assert = chai.assert;
        browser.url("www.emag.com")
        browser.setWindowSize(1900,  1080)
        browser.deleteAllCookies()

    }
}
