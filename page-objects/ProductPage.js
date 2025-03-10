import { expect } from "@playwright/test"

export class ProductPage {
    // this is a method create constructor
    constructor(page) {
        this.page = page
        this.addButton = page.locator('[data-qa="product-button"]')
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
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

    // get basket counter
    getBasketCounter = async () => {
        const text = await this.basketCounter.textContent()
        console.log("Number item in basket: " + text)
        return parseInt(text)
    }

    // validate basket counter
    validateBasketCounter = async (number) => {
        if (number == this.getBasketCounter())
            return true
        else
            return false
    }

}