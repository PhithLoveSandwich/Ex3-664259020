const {UserState} = require("./UserState");
const {Customer} = require("./Customer");
const {WebUser} = require("./WebUser");
import { Account } from "./Account";
import { Product } from "./Product";
import { ShoppingCart } from "./ShoppingCart";
import { Payment } from "./Payment";
const {OrderStatus} = require("./OrderStatus")
const {Order} = require("./Order")
const {LineItem} = require("./LineItem")

// เพิ่ม WebUser 2 คน
const User1 = new WebUser ("U001","Pass0012");
const User2 = new WebUser ("U002","Word0013");
User1.setState(UserState.ACTIVE);
User2.setState(UserState.ACTIVE);

console.log();
console.log("########################## User ##########################")
console.log(User1.toString());
console.log(User2.toString());
console.log("##########################################################")
console.log();

// เพิ่ม Customer 2 คน
const Cus1 = new Customer("C001", "Ratchaburi", "0855564028", "Customer001@test.ac.th", User1);
const Cus2 = new Customer("C002", "Bangkok", "0123987456", "Customer002@test.ac.th", User2);
console.log(Cus1.toString());
console.log(Cus2.toString());
console.log();

// เพิ่ม Product 5 ชนิด (เครื่องเขียน)
const Pro1 = new Product("P001", "Pen", "SE-ED");
const Pro2 = new Product("P002", "Pencil", "SE-ED");
const Pro3 = new Product("P003", "Eraser", "BTS");
const Pro4 = new Product("P004", "Notebook", "BTS");
const Pro5 = new Product("P005", "Correction Pen", "Naiin");

console.log("############################ Product ############################")
console.log(Pro1.toString());
console.log(Pro2.toString());
console.log(Pro3.toString());
console.log(Pro4.toString());
console.log(Pro5.toString());
console.log("#################################################################")
console.log();

// สร้าง ShoppingCart และ Order สำหรับ User1
const cart1 = new ShoppingCart("C001");
cart1.addProduct(Pro1, 2); // Pen 2 ชิ้น
cart1.addProduct(Pro3, 1); // Eraser 1 ชิ้น
console.log("############################ Cart 1 ############################");
console.log(cart1.toString());
console.log(`Total Price for Cart 1: ${cart1.calculateTotal()}`);
console.log("#################################################################");

const order1 = new Order("O001", "1/06/2025", "1/07/2025", "Ratchaburi");
order1.setStatus(OrderStatus.DELIVERED);
order1.setTotal(cart1.calculateTotal());
console.log("############################ Order 1 ############################");
console.log(order1.toString());
console.log("#################################################################");
console.log();


const cart2 = new ShoppingCart("C002");
cart2.addProduct(Pro2, 3); 
cart2.addProduct(Pro4, 2); 
console.log("############################ Cart 2 ############################");
console.log(cart2.toString());
console.log(`Total Price for Cart 2: ${cart2.calculateTotal()}`);
console.log("#################################################################");

const order2 = new Order("O002", "2/06/2025", "2/07/2025", "Bangkok");
order2.setStatus(OrderStatus.PENDING);
order2.setTotal(cart2.calculateTotal());
console.log("############################ Order 2 ############################");
console.log(order2.toString());
console.log("#################################################################");

const payment1 = new Payment("PAY001", cart1.calculateTotal(), "2025-01-19", "Credit Card");
console.log("############################ Payment 1 ############################");
console.log(payment1.toString());
console.log("#################################################################");

const payment2 = new Payment("PAY002", cart2.calculateTotal(), "2025-01-20", "Credit Card");
console.log("############################ Payment 2 ############################");
console.log(payment2.toString());
console.log("#################################################################");
