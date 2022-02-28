const loginPage = {
    /**
     * define selectors using getter methods
     */
    Username: function () {
        return browser.$('//input[@type=\'email\']')
    },
    Password: function () {
        return browser.$('//input[@type=\'password\']')
    },
    ContinueButton: function () {
        return browser.$('//button[@type=\'submit\']')
    },
    insertUsername: function(value) {
        this.Username().waitForDisplayed(8000)
        this.Username().setValue(value)
    },
    insertPassword: function(value) {
        this.Password().waitForDisplayed(8000)
        this.Password().setValue(value)
    },
    clickContinue: function (){
        this.ContinueButton().waitForDisplayed(8000)
        this.ContinueButton().click()
    },
}

module.exports = loginPage