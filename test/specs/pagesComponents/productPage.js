const productPage = {

    get SizeTab(){
        return browser.$(`//div[@id='dropdown-wrapper']`)
    },
    get SizeWomen(){
        return browser.$(`//div[@id='sizeContainer']/div[1]`)
    },
    get SizeBoys(){
        return browser.$(`//div[@id='sizeContainer']/div[1]`)
    },
    get BuyBox(){
        return browser.$(`//button[@id='buy-box']`)
    },
    get SizeContainer(){
        return browser.$(`//div[@id='sizeContainer']`)
    },
}

module.exports = productPage