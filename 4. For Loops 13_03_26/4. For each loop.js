//forEach Loop example
/* let arr=[3,4,5,6,7,8,9];
arr.forEach((element)=>{
    console.log(element);
}) */

// Using for each loop print only even numbers
/* let arr=[3,4,5,6,7,8,9];
arr.forEach((num)=>{
    if(num%2==0)
    {
        console.log(num);
    }

}); */

//Using foreach loop calculate the sum of all numbers within an array
/* let arr=[1,2,3,4,5];
let sum=0;
arr.forEach((element)=>{
    sum+=element;
})
console.log("The sum of the array elements is:- ",sum); */

/* // program to calculate price of arrays using foreach
let orders = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 500 },
  { item: "Keyboard", price: 1500 }
];
let totalPrice=0;
orders.forEach((elements)=>{
    totalPrice+=elements.price;
    });
    console.log(totalPrice);
 */
// Using forEach loops find students who pass and find total
//  marks of all students from array of objects
/* let students = [
  { name: "Rahul", marks: 80 },
  { name: "Amit", marks: 45 },
  { name: "Saanvi", marks: 90 },
  { name: "Rohan", marks: 35 }
];
let total=0;
students.forEach((students)=>{
    if(students.marks>50)
    {
        console.log(students.name+" passed");
    }
    total+=students.marks;
});
console.log("Total Marks of all Students is:- "+total); */

// basic for each loop
let arr=["Abhishek","Saanvi","Riya","Gapu"];
arr.forEach((elements)=>{
    console.log(elements);
})