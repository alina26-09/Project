const homeItems = require('../pagesComponents/homePage')
const homePageComponents = require("../pagesComponents/homePage");
let initialNumber = 0;

 function  logIn() {
     homeItems.MyAccount().click()
}

 function searchTypeOfClothes(gender, typeOfClothes) {
     //homePageComponents.TabMenuWithGender.scrollIntoView()
     //homeItems.GenderTab(gender).waitForDisplayed(1000)
     homeItems.GenderTab(gender).click()
     console.log("3--> click on gender")

     browser.waitUntil(function() {
         return browser.getUrl() === `https://www.fashiondays.ro/t/${gender.toLowerCase()}/`
     }, 6000, "not loaded")
     browser.pause(2000)
     homeItems.ClothesTab.waitForClickable(1000)
     homeItems.ClothesTab.click()
     console.log("click on clothes tab")
     homeItems.TypeOfClothes(typeOfClothes).waitForDisplayed({timeout: 5000})
     homeItems.TypeOfClothes(typeOfClothes).click()
}

function selectProduct() {
    homeItems.getProduct.scrollIntoView()
    homeItems.getProduct.click()
}

 function returnNumberOfItemsInCart() {
    //homeItems.prodCartCountHeader.waitForDisplayed(8000)
    let count = parseInt( homeItems.prodCartCountHeader.getText())
    console.log('---->COUNT', count)
    return count
}

module.exports = {
    logIn,
    searchTypeOfClothes,
    selectProduct,
    returnNumberOfItemsInCart,
    initialNumber}