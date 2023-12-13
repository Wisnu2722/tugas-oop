
import { Category } from './category.js'
import Product from './product.js'
import Cart from './cart.js';
import formatCurrency from './helper.js';
import Table from 'cli-table3'


// instance new category object
const Electronics = new Category('C01', 'Electronic')
const Laptop = new Category('C02', 'Laptop')
const Mobile = new Category('C03', 'Mobile')


// instance new product object
const samsungS23 = new Product('P01', 'Samsung S23', '7000000', 'Samsung flagship phone')
const rog = new Product('P02', 'ROG G15', '12500000', 'Top performance Laptop')
const predator = new Product('P03', 'Predator Neo 17', '20500000', 'Top performance Laptop')
const iphone = new Product('P04', 'iphone X', '14000000', 'high price phone')
const corsair = new Product('P05', 'Corsair DDR5 128GB', '850000', 'Fastest DDR5 RAM')
// const fiesta = new Product("P03",foods.categoryName,"fiesta", "2500000", "Top performance Laptop")

samsungS23.addToCategory('Electronics')
samsungS23.addToCategory('Mobile')

console.log(samsungS23.displayInfo())



// add new product
// electronics.addProduct(samsungS23)
// electronics.addProduct(rog)
// electronics.addProduct(predator)
// electronics.addProduct(iphone)
// foods.addProduct(corsair)

// let allProduct = []
// let cart = []


// const cart1 = new Cart('C01', samsungS23, 2)
// const cart2 = new Cart('C01', rog, 5)

// cart.addItem

// cart.push(cart1)
// cart.push(cart2)
// cart.push(cart1.addItemm('C01', rog, 5))
// let dataCart1 = cart1.addItemm('C01', samsungS23, 2)
// console.log(cart)


// console.log(electronics.displayInfo())
// const electronicList = electronics.Products()
// const foodList = foods.Products()


// electronicList.forEach(element => {
//     allProduct.push(element)
// });

// foodList.forEach(element => {
//     allProduct.push(element)
// });

// console.log(allProduct)



// const Table = require('cli-table3');
// const productTable = new Table({
//     head: ['product Id', 'Category', 'Product Name', 'Price', 'Desc'],
//     style: { head: [], border: [] }
// });

// allProduct.forEach(Element => {
//     productTable.push([
//         { content: Element.productId },
//         { content: Element.categoryName },
//         { content: Element.productName },
//         { content: formatCurrency(Element.price) },
//         { content: Element.description },
//     ]);
// });

// console.log()
// const cartTable = new Table({
//     head: ['cart Id', 'Item', 'qty'],
//     style: { head: [], border: [] }
// });

// console.log(cart)

// cart.forEach(element => {

//     cartTable.push([
//         {content:element.cartId},
//         {content:element.items.productName},
//         {content:element.qty},
//     ])
// });

// console.log(cartTable.toString())
