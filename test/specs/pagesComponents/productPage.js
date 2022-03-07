const productPage = {

    get SizeTab(){
        return browser.$(`//div[@id='dropdown-wrapper']`)
    },
    Size: function(sizeNumber){
        return browser.$(`//div[@class='short po-markup ']`)
    },
    get BuyBox(){
        return browser.$(`//button[@id='buy-box']`)
    },
    get WishlistBox(){
        return browser.$(`//button[@id='add-wishlist-box']`)
    },
    get ProductTitle() {
        return browser.$(`//h1[@class= 'product-brand-desc']`).getTitle()
    },
}

module.exports = productPage