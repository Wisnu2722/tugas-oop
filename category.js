import Table from "cli-table3"
import formatCurrency from "./helper.js"

export default class Category {

    constructor(CategoryId, categoryName) {
        this.CategoryId = CategoryId
        this.categoryName = categoryName
        this.products = []
    }

    displayInfo() {
        console.log(`Category ID: ${this.CategoryId}`)
        console.log(`Category Name: ${this.categoryName}`)
    }

    addProduct(dataProduct) {
        this.products.push(dataProduct)
    }

    updateCategory(newCategoryName) {
        this.categoryName = newCategoryName
        console.log('\n')
        console.log(`Category name has been updated to: ${this.categoryName}`)
    }

    productList() {
        const productArray = this.products
        const productTable = new Table({
            head: ['Product Name', 'Price', 'Desc'],
            style: { head: [], border: [] }
        });

        console.log(`Products in ${this.categoryName} category `)

        productArray.forEach(element => {
            productTable.push([
                { content: element.productName },
                { content: formatCurrency(element.price) },
                { content: element.description },
            ])
        });

        console.log(productTable.toString())
        console.log('\n')
    }
}