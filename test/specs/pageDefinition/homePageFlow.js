const homePageFlow = require('../pagesComponents/homePage')

function logIn() {
    homePageFlow.MyAccount().click()
}

module.exports = {
    logIn
}