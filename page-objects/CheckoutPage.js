export class CheckoutPage {

    constructor(page) {
        this.page = page

        this.basketCard = page.locator('[data-qa="basket-card"]')
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
        this.basketItemRemoveButton = page.locator('[data-qa="basket-card-remove-item"]')
    }

    removeCheapestProduct = async () => {
        await this.basketCard.first().waitFor()
        await this.basketItemPrice.first().waitFor()
        const allPriceTexts = await this.basketItemPrice.allInnerTexts()
        console.warn({ allPriceTexts })
        // [ '499$', '599$', '320$' ]

        const priceIntLists = allPriceTexts.map(text => parseInt(text.replace('$', '')))
        console.warn({ priceIntLists })
        //  [ 499, 599, 320 ]

        let minPrice = priceIntLists[0]
        let smallestPriceIdx = 0
        console.warn("array length: " + priceIntLists.length)
        for (let i = 0; i <= priceIntLists.length; i++) {
            if (minPrice > priceIntLists[i]) {
                minPrice = priceIntLists[i]
                smallestPriceIdx = i
            }
        }

        await this.basketItemRemoveButton.nth(smallestPriceIdx).waitFor()
        await this.basketItemRemoveButton.nth(smallestPriceIdx).click()
    }
}