// Single parameter arrow function
//let name="Abhishek Mukherjee";
/* const greet = (name) => {
  return "Hello " + name;
};
console.log(greet("Abhishek")); */
/* const greet = name => "Hello " + name;
console.log(greet(name)); */

/* const square =side => side*side;
console.log(square(5)); */
// Defining arrow functions with multiple parameters
/* const area =(length,width) => length*width;
console.log(area(5,4)); */

// Arrow function to calculate simple interest
/* const si =(p,r,t) => (p*r*t)/100;
console.log(si(10000,6.5,3)); */

// program two swap two numbers without third variable 5,7 
/* const swap =(a,b) => {
    a=a-b;
    b=a+b;
    a=b-a;
    return [a,b];
}
console.log("The Reversed value of A and B is"+swap(6,7)); */

// Program using arrow function to convert Celcius to Fahrenheit F = (C × 9/5) + 32
const tempConverter =(c)=>{
    let f = (c * 9/5) + 32;
    return f;
}
console.log("The Converted Temperature is:- "+tempConverter(45));

