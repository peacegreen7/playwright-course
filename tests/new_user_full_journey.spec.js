import { test } from "@playwright/test"
import { ProductPage } from './../page-objects/ProductPage';

test.only('New user full end-to-end test journey', async ({ page }) => {

    const productPage = new ProductPage(page)
    await productPage.visit()

    const number = 3
    for (let i = 0; i < number; i++) {
        await productPage.addProductToBasket(i)
    }

    console.log(productPage.validateBasketCounter(number))

    await page.pause()
})

