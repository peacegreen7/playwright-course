import { expect } from "@playwright/test"
import { Navigation } from "./Navigation"

export class ProductPage {
    // this is a method create constructor
    constructor(page) {
        this.page = page
        this.addButton = page.locator('[data-qa="product-button"]')
    }

    // this is a function
    visit = async () => {
        await this.page.goto('/')
    }

    // add product to basket
    addProductToBasket = async (index) => {

        const specificAddButton = this.addButton.nth(index)
        await specificAddButton.waitFor()
        await expect(specificAddButton).toHaveText('Add to Basket')

        await specificAddButton.click()
        await expect(specificAddButton).toHaveText('Remove from Basket')
    }

    // validate basket counter
    validateBasketCounter = async (number) => {
        const navigation = new Navigation(this.page)
        if (number == navigation.getBasketCounter())  {
            await expect(navigation.getBasketCounter()).toBe(number)
            return true
        }
        else
            return false
    }

}