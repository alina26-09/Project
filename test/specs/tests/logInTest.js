const loginPage = require('../pageDefinition/loginPageFlow')
const homePage = require('../pageDefinition/homePageFlow')

describe('start the flow', () => {

    it('open emag page', () => {
        assert.equal(browser.getTitle(), 'Emag')
        assert.equal(browser.getUrl(), 'https://www.emag.com/')
    })

    it('should login in the app', () =>{
        homePage.logIn()
        loginPage.loginWithEmail()
    })

    after(function () {
        if (this.currentTest.state === 'failed')
            browser.saveScreenshot(`./test/target/Screenshots/${Date.now()}.png`);
    })

})
