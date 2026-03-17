// Problem 3
/* let text = "Login successful";
let result = text.includes("Login") ? "Login is available within the string" : "Login not available";
console.log(result);


// Problem 5
let response = "Error: Invalid password";

let result1 = response.toLowerCase().includes("error")
    ? "Error Found"
    : "Error not found";

console.log(result1); */



// Function to reverse a string
/* let str = "Welcome";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed); */

// program to find a string is palindrome or not
let str = "madam";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
if(str===reversed)
{
    console.log("The String is Palindrome");
}
else
    console.log("The String is Not palindrome");