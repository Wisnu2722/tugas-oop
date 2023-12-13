import formatCurrency from "./helper.js"
import Table from "cli-table3"

export default class Order {

    constructor(orderId) {
        this.orderId = orderId
        this.items = []
    }

    createOrder(cart) {
        console.log('\n')
        console.log(`Order Placed, cart ${cart.cartId} now empty`)
        this.items = cart.items
        cart = []
    }
    
    displayOrderDetail() {
        console.log('\n')
        console.log(`Order ID: ${this.orderId}`)
        const allItems = this.items
        let subTotal
        let total = 0

        const productOrdered = new Table({
            head: ['Product Name', 'Price', 'Qty', 'Sub Total'],
            style: { head: [], border: [] }
        });

        allItems.forEach(element => {
            let product_name = `${element['product']['productName']}`
            subTotal = element['product']['price'] * element.qty
            productOrdered.push([
                { content: product_name },
                { content: `${formatCurrency(element['product']['price'])}` },
                { content: element.qty },
                { content: formatCurrency(subTotal) },
            ])
            total += subTotal
        });
        productOrdered.push([
            { hAlign: 'center', colSpan: 3, content: 'Total' },
            { content: formatCurrency(total) },
        ])

        console.log(productOrdered.toString())
        console.log('\n')
    }

}