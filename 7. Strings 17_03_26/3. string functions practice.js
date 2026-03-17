// String length
let str="Abhishek Mukherjee is Learning JavaScript and Playwright!";
console.log("The length of the given string is:- "+str.length);

// ToUpperCase string convertion
console.log("The Uppercase of the String is:- "+str.toUpperCase());

// Lower case of a String
console.log("The Lower Case of the String is:- "+ str.toLowerCase());

// Trim or removing whitespaces
let userName="  amukherjee  ";
console.log("Username after removing whitespaces is:- "+ userName.trim());

// includes function
let msg="Login Successful!";
console.log(msg.includes("Successful"));

// Starts with and ends with function
let str1 = "Hello World";
console.log(str1.startsWith("Hello"))
console.log(str1.endsWith("World"))

// String replace function
console.log("The Replaced String is:- "+ str1.replace("World","Abhishek !"));

// Function to slice a string msg1.slice(0,4) means starting from 
// the 0th position of the string till the 4th element
let msg1="Automobole";
console.log("The Sliced String is "+ msg1.slice(0,4));

// Function to split a given string based on a delimeter, it generates an arrow of the string
let names = "Abhishek,Rohan,Saanvi,Vikash";
console.log(names.split(","));