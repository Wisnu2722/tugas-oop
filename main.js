import formatCurrency from "./helper.js"
import Product from "./product.js"
import Table from "cli-table3"

// import formatCurrency from "./helper.js";
// const Table = require('cli-table3');
const tableProduct = new Table({
    head: ['product Id', 'Product Name', 'Price', 'Desc'],
    style: { head: [], border: [] }

});



console.log(tableProduct.toString())
