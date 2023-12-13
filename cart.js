import formatCurrency from "./helper.js"

export default class Cart {

    constructor(cartId) {
        this.cartId = cartId
        this.items = []
        this.qty = []
    }

    addItem(product, qty) {
        this.items.push({ product, qty })
    }

    removeItem(product) {

    }

    viewCart() {

        console.log(`cart id: ${this.cartId}`)
        const allItems = this.items
        let subTotal
        let total = 0

        allItems.forEach(element => {
            console.log(`name: ${element['product']['productName']}`)
            console.log(`price: ${formatCurrency(element['product']['price'])}`)
            console.log(`qty: ${element.qty}`)
            subTotal = element['product']['price'] * element.qty
            console.log(`sub total: ${formatCurrency(subTotal)}`)
            total += subTotal
        });

        console.log(formatCurrency(total))

    }
}