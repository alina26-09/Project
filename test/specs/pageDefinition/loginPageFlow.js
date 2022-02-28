const loginPage = require('../pagesComponents/loginPage')
const data = require('../data/dataLogin')
function loginPageWithEmailAndPassword() {
    const user = 'testemailalina@gmail.com'
    const password = 'Parola123$'

    loginPage.insertUsername(user)
    loginPage.clickContinue()
    loginPage.insertPassword(password)
    loginPage.clickContinue()
}

module.exports = {
    loginWithEmail: loginPageWithEmailAndPassword
}