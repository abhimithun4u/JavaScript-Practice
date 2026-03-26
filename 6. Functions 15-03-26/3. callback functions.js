// Basic callback function example
let name="Abhishek";
hello(goodbye)
function hello(callback){
    console.log("Hello");
    callback(name);
}
function goodbye(name)
{
    console.log("Goodbye "+name);
} 

/* // Program for callcack function two add two numbers
sum(displayResult,7,8);
function sum(callback,a,b){
    let result= a+b;
    callback(result);
}

function displayResult(result){
    console.log(result);

} */

/* // Calback function to perform basic calculator function
calculate(sum,6,7);
calculate(sub,9,7);
calculate(mul,3,4);
calculate(div,6,2);
function calculate(callback,a,b){
console.log(callback.name + " of two numbers is: " + callback(a, b));
};
function sum(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function mul(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}