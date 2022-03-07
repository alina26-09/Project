const loginPage = {
    /**
     * define selectors using getter methods
     */
    Username: function () {
        return browser.$('//input[@name=\'pizokel_customer[_username]\']')
    },
    Password: function () {
        return browser.$('//input[@type=\'password\']')
    },
    ContinueButton: function () {
        return browser.$('//input[@id=\'pizokel_customer_submit\']')
    },
    insertUsername: function(value) {
        this.Username().waitForDisplayed(8000)
        this.Username().setValue(value)
    },
    insertPassword: function(value) {
        this.Password().waitForDisplayed(8000)
        this.Password().setValue(value)
    },
    clickLogInButton:  function (){
         this.ContinueButton().waitForDisplayed(8000)
         this.ContinueButton().click()
    },
}

module.exports = loginPage