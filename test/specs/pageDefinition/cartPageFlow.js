const cartPageElements = require('../pagesComponents/cartPageComponents')

function DeleteElementFromCart() {
    cartPageElements.CartRemoveElement.waitForDisplayed(2000)
    cartPageElements.CartRemoveElement.click()
}
module.exports = {
    DeleteElementFromCart
}