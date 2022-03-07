const waitUntil = require("webdriverio/build/commands/browser/waitUntil");
const homePage = {
    MyAccount(){
        return browser.$('//div/a[@id=\'customer-account\']')
    },
    GenderTab:  function(gender){
        let lowerCaseGender = gender.toLowerCase()
        if(lowerCaseGender === 'fete') {
            console.log("2 -> Click on gender tab 2")
            return   browser.$(`//nav[@id='tag-menu']/ul/li[3]`)
        } else if (lowerCaseGender === 'baieti') {
            return   browser.$(`//nav[@id='tag-menu']/ul/li[4]`)
        }
    },
    get ClothesTab(){
        return browser.$('//li[@class="main-menu__item"]//*[contains(text(), "Imbracaminte")]')
    },
    TypeOfClothes: function(typeOfClothes) {
        return  browser.$(`//a[@class='main-menu__item-child   ']/*[contains(text(), '${typeOfClothes}')]`)
    },
    get getProduct(){
        let randomProduct = Math.floor(Math.random() * 40);
        console.log(randomProduct)
        return browser.$(`//ul[@id='products-listing-list']/li[${randomProduct}]`)
    },
    get ListCategory(){
        return browser.$('//li/div[@class=\'main-menu__overlay\']')
    },
    get prodCartCountHeader(){
        return  browser.$(`//span[@id='prodCartCountHeader']`)
    },

    get CustomerBasket() {
        return browser.$(`//div/a[@id = 'customer-basket']`)
    },
    get TabMenuWithGender(){
        return browser.$(`//nav[@id='tag-menu']`)
    },

    SizeFilterBox: function(size){
        let newSize = size.concat(" CM")
        console.log(newSize)
        return browser.$(`//a[@data-gtm-name='${newSize}']`)
    },
    get HomePage(){
        return browser.$(`//div[@class='container main-content']`)
    },
    get SizeWindow(){
        return browser.$(`//div[@id='sizeFilterOptions']`)
    }

}

module.exports = homePage