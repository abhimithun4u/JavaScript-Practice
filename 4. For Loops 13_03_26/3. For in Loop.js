
/* // for in loop to print key and key and value both
let user = {
  name: "Abhishek",
  email: "abhimithun4u@gmail.com",
  phone: "7797273337",
  age: 44,
  city: "Kolkata"
}
for(let key in user)
{
  console.log(key);
  console.log(key+":-"+user[key]);
} */


// Write a program to find string types elements in an object using for in loop
let user = {
  name: "Abhishek",
  email: "abhimithun4u@gmail.com",
  phone: 7797273337,
  age: 44,
  city: "Kolkata",
  JobRole: "QA Manager"
}
let count=0;
for(let key in user)
{
  if(typeof user[key]==="string")
  {
    console.log(user[key]);
    count+=1;
  }
}
console.log(count);