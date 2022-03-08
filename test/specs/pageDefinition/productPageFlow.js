const productPage = require('../pagesComponents/productPage')

 function selectSize(gender) {
     productPage.SizeTab.scrollIntoView()
     productPage.SizeTab.waitForClickable(2000)
     productPage.SizeTab.click()
     browser.pause(1000)
     productPage.SizeContainer.waitForDisplayed(2000)
     if(gender === 'Girls') {
         productPage.SizeWomen.click()
     } else if(gender === 'Boys') {
         productPage.SizeBoys.click()
     }

}
 function addInBuyBox() {
     productPage.BuyBox.click()
}

module.exports = {
    selectSize,
    addInBuyBox,
}