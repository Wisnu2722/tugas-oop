import formatCurrency from "./helper.js"
import Table from "cli-table3"

export default class Product {


    constructor(productId, productName, price, description) {
        this.productId = productId
        this.productName = productName
        this.price = price
        this.description = description
        this.categories = []
    }

    displayInfo() {
        console.log(`Product ID: ${this.productId}`)
        console.log(`Product Name: ${this.productName}`)
        console.log(`Price: ${formatCurrency(this.price)}`)
        console.log(`Desc: ${this.description}`)
        console.log(`Categories: ${this.categories.join(', ')}`)
    }

    updateProduct(newProductName, newPrice, newDescription) {
        this.productName = newProductName
        this.price = newPrice
        this.description = newDescription

        console.log("product has been updated")
        console.log(`Product : ${this.productName}`)
        console.log(`Price : ${this.price}`)
        console.log(`Desc : ${this.description}`)
    }

    addCategory(categoryName) {
        this.categories.push(categoryName)
    }
}