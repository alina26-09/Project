const loginPage = require('../pageDefinition/loginPageFlow')
const homePage = require('../pageDefinition/homePageFlow')
const homePageComponents = require('../pagesComponents/homePage')
const productPage = require('../pageDefinition/productPageFlow')
const cartPage = require('../pageDefinition/cartPageFlow')
const productComponents = require('../pagesComponents/productPage')
const waitUntil = require("webdriverio/build/commands/browser/waitUntil");
let initialNumberOfElemInCart ;
describe('start the flow', () => {

    it('open emag page',  () => {
        assert.equal( browser.getUrl(), 'https://www.fashiondays.ro/')
    });

    it('should login in the app',  () =>{
        initialNumberOfElemInCart = homePage.returnNumberOfItemsInCart()
         console.log("0--> log IN")
         homePage.logIn()
         loginPage.loginWithEmail()
        browser.waitUntil(function() {
             return (browser.getTitle()).trim() === 'Colectii de moda pentru femei'
        }, 6000, "not loaded")
    });

    it('should search pyjamas for girls',  () =>{
        console.log("1--> search for girls")
        homePage.searchTypeOfClothes("Fete", "Pijamale")
        let expected =  browser.getTitle()
        assert.equal(expected, "Imbracaminte pentru casa Fete")
    });

    it('should select an item and add in buyBox',  () => {
        let beforeC =   homePage.returnNumberOfItemsInCart()
         homePage.selectProduct()
         productPage.selectSize('Girls')
         productPage.addInBuyBox()
         browser.pause(3000)
         let actualValue  =  homePage.returnNumberOfItemsInCart()
         console.log(actualValue)
         assert.equal(beforeC + 1, actualValue)
    });


    it('should search t-shirts for boys', () => {
        homePageComponents.TabMenuWithGender.scrollIntoView()
        browser.pause(2000)
        homePage.searchTypeOfClothes("Baieti", "Tricouri")
        console.log(browser.getTitle())
        assert.equal(browser.getTitle(), "Tricouri Copii | Tricouri Baieti")
    })

    it('should select  a T-SHIRT and add in buyBox', () => {
        let beforeC =   homePage.returnNumberOfItemsInCart()
        homePage.selectProduct()
        productPage.selectSize('Boys')
        productPage.addInBuyBox()
        browser.pause(3000)
        let actualValue = homePage.returnNumberOfItemsInCart()
        assert.equal(beforeC + 1,  actualValue)
    })

    it ('should delete items in cart', () => {
        homePageComponents.CustomerBasket.click();
        browser.waitUntil(function() {
            return (browser.getTitle()).trim() === 'Fashion Days - Cosul Meu'
        }, 6000, "not loaded")
        cartPage.DeleteElementFromCart();
        browser.pause(1000)
        cartPage.DeleteElementFromCart();
        browser.pause(1000)
        let actualValue  =  homePage.returnNumberOfItemsInCart()
        assert.equal(initialNumberOfElemInCart,  actualValue)
    });


    after(function () {
        if (this.currentTest.state === 'failed')
            browser.saveScreenshot(`./test/target/${Date.now()}.png`);
    })
})
