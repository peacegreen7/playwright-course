import { test, expect } from '@playwright/test';

test('Product page add to basket', async ({page}) => {

    await page.goto('/')

    const buttonAddToBasket = page.getByRole('button', { name: 'Add to basket'}).first()
    await buttonAddToBasket.click()

    await page.pause()

})