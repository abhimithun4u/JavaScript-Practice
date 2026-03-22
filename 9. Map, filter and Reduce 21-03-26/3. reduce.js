/* //Program to use reduce function to add all elements within an array and return
let array=[1,2,3,4,5];
let arr= array.reduce((a,b)=>{
    return a+b;
})
console.log(arr); */

/* // Program using reduce to find the maximum number within an array
let array=[34,56,67,87,34,98,123,456,0,-45,12,340, 4561];
let findMax=array.reduce((num1,num2)=>{
    return num1>num2 ? num1 : num2;
})
console.log("The largest Number within the array is:- "+findMax); */

/* // Program to find toatal price of array elements using reduce function
let cart = [
  { price: 100 },
  { price: 200 }
];
let totPrice=cart.reduce((pr,val)=>{
    return pr+val.price;
},0)
console.log(totPrice); */



// Program to find toatal price of array elements using reduce function
let cart = [
  { name: "Laptop", price: 5000 },
  { name: "Phone", price: 2000 },
  { name: "Mouse", price: 500 }
];
let cartValue=cart.reduce((num,pr)=>{
    return num+pr.price;
},0)
console.log(cartValue);