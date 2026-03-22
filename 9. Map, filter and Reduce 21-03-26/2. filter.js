/* let arr=[34,67,23,56,87,95,3,6,9,2];
let neArr=arr.filter((value)=>{
  
    return value<10;
})
console.log(neArr); */

/* //Program using filters to find and print even numbers within an array
let numbers = [5, 12, 8, 20,3,29,72,56,49,33];
let arr=numbers.filter((num)=>{
    if(num%2===0){
        return num;
    }
})
console.log(arr); */

// Program to filter even numbers greater than 20 in an array
let numbers = [10, 15, 22, 33, 40, 9, 78,3, 8];
let arr=numbers.filter((num)=>{
    if(num%2===0 && num>20){
        return num;
    }
})
console.log("The Even Numbers greater than 20 are:-  ", arr);