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