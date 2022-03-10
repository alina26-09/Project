var chai = require('chai');
const video = require('wdio-video-reporter');
exports.config = {

    // suites: {
    //
    //     LoginTest: [
    //         './test/specs/tests/logInTest.js'
    //     ],
    // },
    user: 'AlinaIftode',
    key: '1384c9d8-490e-4be8-983e-b359161308eb',
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        'sauce:options': {
            screenResolution: '1920x1080',
            //name: 'LoginTest',
            idleTimeout: 1000,
        }
    }],
    region: 'eu',
    specs: ['./test/specs/**/logInTest.js'],
    // runner: 'local',
    sync: true,
    pageLoadStrategy: 'normal',
    maxInstances: 20,
    logLevel: 'error',
    deprecationWarnings: true,
    waitForTimeout: 200000,
    connectionRetryTimeout: 800000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        'dot',
        ['junit', {
            outputDir: './report'
        }]],

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
