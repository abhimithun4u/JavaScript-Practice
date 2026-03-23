// callback function to check odd even
/* const oddEven=(num) =>{ 
  let status =  num%2==0 ? "Even" : "odd" ;
 console.log(num+" is "+status);
}

function checkOddEven(n)
{
    let number = 7;
    n(number);
}
checkOddEven(oddEven); */

/* // Basic callback function example
let name="Abhishek";
hello(goodbye)
function hello(callback){
    console.log("Hello");
    callback(name);
}
function goodbye(name)
{
    console.log("Goodbye "+name);
} */

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
} */

/* //Program using callback function display various login status

function executeAction(callback){
    console.log("Executing "+callback.name);
    callback();
}
function login(){
   console.log("User Logged In");
    }
function fetchData(){
   console.log("Data fetched");
    }
function logout(){
    console.log("User Logged Out");
   }

executeAction(login);
executeAction(fetchData);
executeAction(logout); */

//Program using callback to execute ecommerce flow
function createUser(name,email,callback){
    console.log(`User Created ! ${name},${email}`)
    callback(name,email);
    }

function placeOrder(user,product,price,callback){
    console.log(`${user} has ordered ${product} for ${price}`)
    callback(user,product,price);
}

function makePayment(user,amount,callback){
    console.log(`Payement for ${amount} has been made succssfully by ${user}`)
    callback(user,amount);
}
function sendConfirmation(user,callback){
    console.log(`Confirmation Message sent to ${user}`);
    }

createUser("Abhishek", "abhi@gmail.com", (user) => {
  placeOrder(user, "Laptop", 50000, (user, price) => {
    makePayment(user, price, (user) => {
      sendConfirmation(user);
    });
  });
});