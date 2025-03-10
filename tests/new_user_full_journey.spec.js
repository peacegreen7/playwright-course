import { test } from "@playwright/test"
import { Navigation } from "../page-objects/Navigation";
import { ProductPage } from './../page-objects/ProductPage';
import { CheckoutPage } from './../page-objects/CheckoutPage';

test.only('New user full end-to-end test journey', async ({ page }) => {

    const productPage = new ProductPage(page)
    await productPage.visit()

    const number = 3
    for (let i = 0; i < number; i++) {
        await productPage.addProductToBasket(i)
    }
    console.log(productPage.validateBasketCounter(number))

    const navigation = new Navigation(page)
    navigation.goToCheckoutPage()

    const checkoutPage = new CheckoutPage(page)
    checkoutPage.removeCheapestProduct()
    
    await page.pause()
})

