// Program to use map, map always creates an new array and return is essential in map
// it modifies the array elements and returns a new array
/* let users=["Abhishek","Saanvi","Riya","Gapu"];
let newUsers = users.map((user)=>{
    return user+" Mukherjee";
})
console.log(newUsers); */

// Program using map to double every element
/* let numbers = [1, 2, 3, 4];
let arr=numbers.map((num)=>{
    return num*2;
})
console.log(arr); */

// Find product names from the array elements
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Mouse", price: 450 }
];
let names = products.map((product)=>{
    return product.name;
})
console.log(names);