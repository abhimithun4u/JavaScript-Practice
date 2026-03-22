// First program for For of Loop for objects

/* let student = {
  name: "Abhishek",
  email: "abhimithun4u@gmail.com",
  phone: "7797273337",
  course: "JavaScript"
}

for (let [key, value] of Object.entries(student)) {
  console.log(key +"= "+ value);
}
 */
// Second program for For of Loop using object

/* let user = {
  name: "Abhishek",
  email: "abhimithun4u@gmail.com",
  phone: "7797273337",
  age: 44,
  city: "Kolkata"
}

for (let key of Object.keys(user)) {
  console.log(key+" = "+user[key]);
} */



  // Practicing For of loop using arrays
/*   let array=[34,45,56,67,78,89];
  for(let element of array)
    console.log(element); */

  // Print array elements multiplied by 2 using for off loops
/*   let nums = [2, 4, 6, 8];
  for(let items of nums)
    console.log(items*2); */

  
/*   // find all negative numbers within an array using for of loop and store in a new array
let nums = [5, 10, -3, 8, -1];
let arr=[];
for(let number of nums){
  if(number<0)
  {
    //console.log(number);
    arr.push(number);
  }
}
console.log(arr); */


  // find only first negative numbers 
let nums = [5, 10, -3, 8, -1];
let arr=[];
for(let number of nums){
  if(number<0)
  {
    console.log(number);
    break;
  }
}
