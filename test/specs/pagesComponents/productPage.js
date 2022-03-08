const productPage = {

    get SizeTab(){
        return browser.$(`//div[@id='dropdown-wrapper']`)
    },
    get SizeWomen(){
        return browser.$(`//div[@id='sizeContainer']/div[@class='short po-markup '][1]`)
    },
    get SizeBoys(){
        return browser.$(`//div[@id='sizeContainer']/div[@class='long po-markup '][1]`)
    },
    get BuyBox(){
        return browser.$(`//button[@id='buy-box']`)
    },
    get SizeContainer(){
        return browser.$(`//div[@id='sizeContainer']`)
    },
    get WishlistBox(){
        return browser.$(`//button[@id='add-wishlist-box']`)
    },
    get ProductTitle() {
        return browser.$(`//h1[@class= 'product-brand-desc']`).getTitle()
    },
}

module.exports = productPage