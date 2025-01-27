# javascript
javascript
# Chapter 1
Introduction to variables
```javascript
"Use strict"; // All this code will be treated as newer version of javascript
// alert("Message"); // This cannot be used in node instead it can be used in browser

let name="asdf"; // string
let age=18; // integer
let isLoggedIn=true; // boolean

// null is a standalone value
let temperature=null;

// symbol is used to determine the uniqueness

// object
console.log(typeof(undefined)); // undefined
console.log(typeof(null)); // object
```
# Chapter 2
Introduction to data types
```javascript
const accountId=1234;
let email="saheelahemad20112003@gmail.com";
var password="1234";
city="Bangalore";

//AccountId=1000;
email="random@gmail.com";
password="news";
city="Sindhanur";

// A variable can also be created without let or var keyword, but it is not a good practice
name="asdf";

// If any of the value is not initialised then it is treated as undefined
let variable;
//console.log(accountId);
//console.log(email);
//console.log(password);
//console.log(city);
console.table([accountId, email, password, city, variable]);

/*
 * Dont use ver to declare the variables use let instead of it
 * Because of issue in block scope and functional scope
 */
```