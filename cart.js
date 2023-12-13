import formatCurrency from "./helper.js"
import Table  from "cli-table3"

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

        const removedIndex = this.items.findIndex(item => item.product === product);

        if (removedIndex !== -1) {
            this.items.splice(removedIndex, 1);
        }

        console.log('\n')
        console.log('Item successfuly deleted')
        this.viewCart()
        
    }

    viewCart() {

        
        console.log(`Cart ID: ${this.cartId}`)
        const allItems = this.items
        let subTotal
        let total = 0

        const productInCart = new Table({
            head: ['Product Name', 'Price', 'Qty', 'Sub Total'],
            style: { head: [], border: [] }
        });

        allItems.forEach(element => {
            let product_name = `${element['product']['productName']}`
            subTotal = element['product']['price'] * element.qty
            productInCart.push([
                { content: product_name },
                { content: `${formatCurrency(element['product']['price'])}` },
                { content: element.qty },
                { content: subTotal },
            ])

            // console.log(`price: ${formatCurrency(element['product']['price'])}`)
            // console.log(`qty: ${element.qty}`)
            // console.log(`sub total: ${formatCurrency(subTotal)}`)
            total += subTotal
        });

        console.log(productInCart.toString())
        console.log(`Total: ${formatCurrency(total)}`)
        console.log('\n')

    }
}