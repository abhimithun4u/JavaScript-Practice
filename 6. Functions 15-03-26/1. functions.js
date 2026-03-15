// Example 1 of Parameterised function
/* function greet(name)
{
    console.log("Hello "+name);
}
greet("Abhishek");
 */

// Example 2 of Parameterised function
/* console.log("Basic Calculator");
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}

console.log(add(5,4));
console.log(sub(5,4));
console.log(mul(5,4));
console.log(div(5,4)); */

// Function to find square of a number
/* let num=5;
function square(n)
{
    return n*n;
}
let sqr = square(num);
console.log("The Square of "+num+ " is:-  "+sqr); */


// Function to find odd and even
/* let num =7;
function oddEvenCalculate(num)
{
    if(num%2===0)
        return "Even";
    else
        return "Odd";
}
console.log(num+" is a "+oddEvenCalculate(num)+" number"); */

// function to check whether the number is postive or negative
/* function checkPositiveNegative(number)
{
    return (number >= 0 ) ? "Postive" : "Negative";
    
}
let num = 7;
console.log(num+ " is a "+checkPositiveNegative(num)+" Number"); */

// program using function to find the largest among two numbers
function findLargest(a,b)
{
    let largest;
    if(a>b)
        c=a;
    else
        c=b;
    return c;
}
console.log("The Largest Number is:- "+findLargest(719,567));
