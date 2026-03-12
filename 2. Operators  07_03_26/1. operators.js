// we put // for single line comment
// we put /* multiline comment here */ for multiline comment

// Arithmetic Operators

let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.33
console.log("Modulus:", a % b);         // 1 (remainder)
console.log("Exponent:", a ** b);       // 1000

// Assignment Operators

let x = 10;

x += 5;  // x = x + 5
console.log("x += 5:", x);

x -= 3;
console.log("x -= 3:", x);

x *= 2;
console.log("x *= 2:", x);

x /= 4;
console.log("x /= 4:", x);

// Comparison Operators

let num1 = 10;
let num2 = "10";

console.log("== :", num1 == num2);   // true (value check)
console.log("=== :", num1 === num2); // false (type + value)

console.log("!= :", num1 != num2);
console.log("!== :", num1 !== num2);

console.log("> :", num1 > 5);
console.log("< :", num1 < 20);

console.log(">= :", num1 >= 10);
console.log("<= :", num1 <= 9);

// Logical Operators

let age = 25;
let hasLicense = true;

console.log("AND:", age > 18 && hasLicense);
// true only if both conditions are true

console.log("OR:", age < 18 || hasLicense);
// true if any condition is true

console.log("NOT:", !hasLicense);
// reverses the boolean

// Increment / Decrement

let a = 5;
let b =6;

a++;
console.log("Post Increment:", a++);
++a;
console.log("Pre Increment:", ++a);

b--;
console.log("Post Decrement:", b--);
--b;
console.log("Post Decrement:", --b);

// String Concatenation

let firstName = "Abhishek";
let lastName = "Mukherjee";

let fullName = firstName + " " + lastName;

console.log("Full Name:", fullName);

// Ternary Operator

let marks = 60;

let result = marks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);

// Type Operator

let name = "Abhishek";
let age2 = 44;

console.log("Type of name:", typeof name);
console.log("Type of age:", typeof age2);

