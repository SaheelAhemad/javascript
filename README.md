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

# Chapter 3
Conversion Operation
```
// Valid number
let string1="100";
number1=Number(string1);
console.log(typeof(string1));
console.log(typeof(number1));
console.log(number1);

// Invalid number
let string2="asdf";
number2=Number(string2);
console.log(typeof(string2));
console.log(typeof(number2));
console.log(number2);

// Invalid number
let string3=null;
number3=Number(string3);
console.log(typeof(string3));
console.log(typeof(number3));
console.log(number3);

// Invalid number
let string4="NaN";
number4=Number(string4);
console.log(typeof(string4));
console.log(typeof(number4));
console.log(number4);

// Invalid number
let string5=false;
number5=Number(string5);
console.log(typeof(string5));
console.log(typeof(number5));
console.log(number5);

//Conversion to boolean type
let status=1;
let BoolValue=Boolean(status);
console.log(typeof(status));
console.log(typeof(BoolValue));
```