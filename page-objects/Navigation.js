import { expect } from "@playwright/test"

export class Navigation {

    constructor(page) {
        this.page = page
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
        this.checkoutLink = page.getByRole('link', { name: 'Checkout' })
        this.checkoutButton = page.locator('[data-qa="continue-to-checkout"]')
    }

    // get basket counter
    getBasketCounter = async () => {
        await this.basketCounter.waitFor()
        const text = await this.basketCounter.textContent()
        console.log("Number item in basket: " + text)
        return parseInt(text)
    }

    // go to checkout page
    goToCheckoutPage = async () => {
        await this.checkoutLink.waitFor()
        await this.checkoutLink.click()
        await this.page.waitForURL('/basket')
        await expect(this.checkoutButton).toContainText('Continue to Checkout')
    }
}
