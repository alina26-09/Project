const loginPage = require('../pagesComponents/loginPage')
const data = require('../data/dataLogin')
async function loginPageWithEmailAndPassword() {
    const user = 'emailtestalina@gmail.com'
    const password = 'Parola123$'
     loginPage.insertUsername(user)
     loginPage.insertPassword(password)
     loginPage.clickLogInButton()
}
module.exports = {
    loginWithEmail: loginPageWithEmailAndPassword
}