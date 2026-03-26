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

/* //Program using callback to execute ecommerce flow
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
}); */

/* // Basic callback function
function greet(callback){
    console.log("Hello");
    callback();
    }
function clbck(){
    console.log("Callback Executed");
    }
    greet(clbck);
 */
/* function process(callback){
    console.log("Start");
    setTimeout(callback, 2000); 
}
function status(){
    console.log("Done");
}
process(status); */

/* const calculate=(a,b,callback)=>{
    let result=callback(a,b);
    console.log("The Sum Is:- "+result);
};
function sum(a,b){
    return a+b;
}
calculate(7,6,sum); */
/* 
function login(username, password, success, error) {
    if (username === "admin" && password === "1234") {
        success();
    } else {
        error();
    }
}

function onSuccess() {
    console.log("Login successful");
}

function onError() {
    console.log("Invalid credentials");
}

login("admin", "1234", onSuccess, onError); */

/* function greet(callback,name){
    console.log("Good Morning "+name);
    return callback(name);
}
function achievement(n){
    console.log(n+" has understood Callback and Promise");
}
greet(achievement,"Abhishek"); */

/* //program to calculate fron one callback call
let operations = [sum, sub, mul, div];

function calculateAll(a, b, operations) {
  operations.forEach((op) => {
    console.log(`${op.name} of two numbers is- : ${op(a, b)}`);
  });
}

calculateAll(11, 4, operations);


function sum(num1,num2){
    total=num1+num2;
    return total;
}

function sub(num1,num2){
    total=num1-num2;
    return total;
}

function mul(num1,num2){
    total=num1*num2;
    return total;
}

function div(num1,num2){
    total=num1/num2;
    return total;
} */
/* 
// function to print start, processing and program executed successfully in nested callback
function login(callback){
    console.log("Login Successful!");
    callback();
}
function openDashboard(callback){
    console.log("Dashboard Opened");
    callback();
}
function dataFetched(callback){
    console.log("Data fetched successfully!");
    callback();
}
function logout(){
    console.log("User Logged Out");
}

login(()=>{
    openDashboard(()=>{
        dataFetched(()=>{
            logout();
        })
    })
})
 */

/* // program to use nested callback or pyramid of hell
function startApp(callback){
    console.log("App started");
    callback();
}
function login(callback){
    console.log("Login done");
    callback();
}
function fetchProfile(callback){
    console.log("Profile Fetched");
    callback();
}
function fetchOrders(callback){
    console.log("Order Fetched");
    callback();
}
function logout(callback){
    console.log("Logged out")
}

startApp(()=>{
    login(()=>{
        fetchProfile(()=>{
            fetchOrders(()=>{
                logout();
            })
        })
    })
}) */

// callback function to check login 
/* function login(username,password,success,error){
    if(username==="Abhishek" && password==="12345"){
        success(username);
    }
    else{
        error();
    }
}
function success(user){
    console.log("Welcome "+user);
}
function error(){
    console.log("Login failed! Try again")
}

login("Abhishek","12345",success,error); */

// Anonymous callback function example
function login(username,password,success,error){
    if(username==="Abhishek" && password==="12345"){
        success(username);
    }
    else{
        error();
    }
}
login("Abhishek","12345",
    ()=>{console.log("Login Successful")},
    ()=>{console.log("Login Failed")}
)