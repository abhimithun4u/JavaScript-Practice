// First program for For of Loop

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
// Second program for For of Loop

let user = {
  name: "Abhishek",
  email: "abhimithun4u@gmail.com",
  phone: "7797273337",
  age: 44,
  city: "Kolkata"
}

for (let key of Object.keys(user)) {
  console.log(key+" = "+user[key]);
}