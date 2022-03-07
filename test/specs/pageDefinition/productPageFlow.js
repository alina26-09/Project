const productPage = require('../pagesComponents/productPage')

 function selectSize(size) {
     productPage.SizeTab.scrollIntoView()
     productPage.SizeTab.waitForClickable(2000)
     productPage.SizeTab.click()
     let elem = productPage.Size(size)
     elem.waitForDisplayed(3000)
     elem.click()
}
 function addInBuyBox() {
     productPage.BuyBox.click()
}

module.exports = {
    selectSize,
    addInBuyBox,
}