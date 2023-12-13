
import Category from './category.js'
import Product from './product.js'
import Cart from './cart.js';
import Order from './order.js';
// import Order from './order.js';



// instance new category object
const Electronics = new Category('C01', 'Electronic')
const Laptop = new Category('C02', 'Laptop')
const Mobile = new Category('C03', 'Mobile')

// show category detail
Electronics.displayInfo()
Laptop.displayInfo()
Mobile.displayInfo()

// update category name
Mobile.updateCategory("Smartphone")

// instance new product object
const samsungS23 = new Product('P01', 'Samsung S23', '7000000', 'Samsung flagship phone')
const rog = new Product('P02', 'ROG G15', '12500000', 'Top performance Laptop')
const predator = new Product('P03', 'Predator Neo 17', '20500000', 'Top performance Laptop')
const iphone = new Product('P04', 'iphone X', '14000000', 'high price phone')
const corsair = new Product('P05', 'Corsair DDR5 128GB', '850000', 'Fastest DDR5 RAM')
// const fiesta = new Product("P03",foods.categoryName,"fiesta", "2500000", "Top performance Laptop")

// add categories to product
samsungS23.addCategory('Electronics')
samsungS23.addCategory('Mobile')

// display product info
samsungS23.displayInfo()
samsungS23.updateProduct("Samsung S25", 5000000, "Samsung future phone")


// add product to a category
Electronics.addProduct(samsungS23)
Mobile.addProduct(samsungS23)
Electronics.addProduct(rog)
Laptop.addProduct(rog)
Electronics.addProduct(predator)
Laptop.addProduct(predator)

// display products that included in the category
Electronics.productList()
Laptop.productList()
Mobile.productList()

// instance new cart object
const cart1 = new Cart('CRT-001')

// added items into cart
cart1.addItem(rog, 1)
cart1.addItem(samsungS23, 3)
cart1.addItem(corsair, 2)

// display cart items
cart1.viewCart()

// remove item from cart
cart1.removeItem(corsair)


// instance object order
const order1 = new Order('ORD-001')

order1.createOrder(cart1)
order1.displayOrderDetail()
