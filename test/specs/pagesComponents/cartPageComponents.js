const cartPageComponents = {
    productTitle: function(nthElement) {
        return browser.$(`//div[@class = 'cart-product-description'][${nthElement}]`)
    },
    get CartRemoveElement(){
        return browser.$(`//a[@title='Sterge']`)
    }
}

module.exports = cartPageComponents