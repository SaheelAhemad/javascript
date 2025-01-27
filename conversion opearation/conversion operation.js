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