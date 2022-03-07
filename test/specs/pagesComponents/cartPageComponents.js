const cartPageComponents = {
    productTitle: function(nthElement) {
        browser.$(`//div[@class = 'cart-product-description'][${nthElement}]`)
    }
}

module.exports = cartPageComponents