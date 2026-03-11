//Declaration of normal variables
let fname ="Abhishek";
let age = 44;
let city ="Kolkata";
console.log("Hello " +fname);
console.log("Your Age is "+age);
console.log("You live in "+city);
console.log(typeof(fname));
console.log(typeof(age));
// Boolean Variable
let isLearning=true;
console.log("Learning JavaScript: ",isLearning);
//null variable declaration and showing its type
let x=null;
console.log(x);
console.log(typeof(x))
// undefined variable declaration and showing its type
let y;
console.log(typeof(y));

//practice set for availability of a product
let product ="Phillips Air Frier";
let price = 5500;
let isAvailable = true;
console.log(product +" is Available : " +isAvailable + " and its price is Rs "+price );

// practice set to update a variable

let score =50;
console.log(score);
score =85;
console.log("The Updated Score is now "+score);

// Practice set to define an object and print the object, find type of the object and print its individual elements
const employee ={
    fname:"Abhishek",
    lname:"Mukherjee",
    empid:"DS005",
    age:43,
    isWorking:true,
    isLearningJS:true,
};
console.log(employee);
console.log("Welcome "+employee["fname"]+" "+employee["lname"]+" ! Your Employee ID is "+employee["empid"]+" and your age is "+employee["age"]+ " and you are working "+employee["isWorking"]+ " and your learning status is "+employee["isLearningJS"]);
const Author ="Abhishek";
console.log(Author);

const students ={
    student1:"Abhishek",
    student2:"Saanvi",
    student3:"Sayantani"
}
console.log("Student 1 is: "+students.student1);