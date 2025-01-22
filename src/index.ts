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

const Act1 = new Account("A1","Ratchaburu",true,"22/01/2024","");
const Act2 = new Account("A2","Bangkok",true,"22/01/2024","");

console.log();
console.log("########################  Account  ########################")
console.log(Act1.toString());
console.log(Act2.toString());
console.log("###########################################################")
console.log();

// เพิ่ม Customer 2 คน
const Cus1 = new Customer(Act1, "C001", "Ratchaburi", "0855564028", "Customer001@test.ac.th", User1);
const Cus2 = new Customer(Act2, "C002", "Bangkok", "0123987456", "Customer002@test.ac.th", User2);
console.log(Cus1.toString());
console.log(Cus2.toString());
console.log();

// เพิ่ม Product 5 ชนิด (เครื่องเขียน)
const Pro1 = new Product("P001", "Pen", "SE-ED");
const Pro2 = new Product("P002", "Pencil", "SE-ED");
const Pro3 = new Product("P003", "Eraser", "B2S");
const Pro4 = new Product("P004", "Notebook", "B2S");
const Pro5 = new Product("P005", "Correction Pen", "Naiin");

console.log("############################ Product ############################")
console.log(Pro1.toString());
console.log(Pro2.toString());
console.log(Pro3.toString());
console.log(Pro4.toString());
console.log(Pro5.toString());
console.log("#################################################################")
console.log();
const Pay1 = new Payment("P01","Yes","T","Ratchaburi Bank")
console.log(Pay1.toString())

const Shop1 = new ShoppingCart("22/01/2025");
console.log(Shop1.toString())