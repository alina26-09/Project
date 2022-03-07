var chai = require('chai');
const video = require('wdio-video-reporter');
exports.config = {

    suites: {

        LoginTest: [
            './test/specs/tests/logInTest.js'
        ],
    },
    runner: 'local',
    sync: true,
    pageLoadStrategy: 'normal',
    maxInstances: 20,
    capabilities: [{
        maxInstances: 20,
        browserName: 'chrome'
    }],
    logLevel: 'error',
    deprecationWarnings: true,
    waitForTimeout: 200000,
    connectionRetryTimeout: 800000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        'dot',
        ['junit', {
            outputDir: './'
        }]],
    services: [['selenium-standalone']],
    before: function (capabilities, specs) {
        global.assert = chai.assert;
        browser.url('www.fashiondays.ro')
        browser.setWindowSize(1920, 1080)
        browser.pause(5000)
    },
    mochaOpts: {
        timeout: 99999999
    }
}