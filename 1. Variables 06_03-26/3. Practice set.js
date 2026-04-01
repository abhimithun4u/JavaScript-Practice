/* const name="Abhishek";
const age =44;
let isTester = true;
console.log("My Name is "+ name+", age is "+age+" Tester: "+isTester); */

/* // program to print elements of an array
let employee={
  name: "Rahul",
  role: "QA",
  experience: 5
}
//console.log(employee.name+" is a "+employee.role+ " with "+employee.experience+" years experience");
console.log(`${employee.name} is a ${employee.role} with ${employee.experience} years experience`); */

// program to print multiple employee details from an array
/* const employees = [
  { name: "Rahul", role: "DevOps", experience: 5 },
  { name: "Anita", role: "Backend Developer", experience: 4 },
  { name: "Abhishek", role: "QA Manager", experience: 14 },
  { name: "Diganta", role: "Frontend Developer", experience: 2 },
];
let empl = employees.map((emp)=>{
    return `${emp.name} is a ${emp.role} with ${emp.experience} years experience`;
});
console.log(empl); */

// program to print senior or junior
/* const employees = [
  { name: "Rahul", role: "DevOps", experience: 5 },
  { name: "Anita", role: "Backend Developer", experience: 3 },
  { name: "Abhishek", role: "QA Manager", experience: 14 },
  { name: "Diganta", role: "Frontend Developer", experience: 2 },
  { name: "Riya", role: "QA Tester", experience: 6 }
];
// map used to go through the array items
let empl1 =employees.map((emp1)=>{
       return `${emp1.name} is ${emp1.experience>=5 ? "Senior" : "Junior"}`; // ternary operator used as a parameter
})
// foreach used to convert array into readable lines
empl1.forEach((e)=>{
    console.log(e);
}) */

/* const employees = [
  { name: "Rahul", role: "DevOps", experience: 5 },
  { name: "Anita", role: "Backend Developer", experience: 3 },
  { name: "Abhishek", role: "QA Manager", experience: 14 },
  { name: "Diganta", role: "Frontend Developer", experience: 2 },
  { name: "Riya", role: "QA Tester", experience: 6 }
];
employees
  .filter(emp => emp.experience >= 5)
  .map(emp => emp.name)
  .forEach(name => console.log(name)); */

/*   // program using function to check senior or junior
  function checkEmployee(emp,exp){
   let level = exp>=5 ? "Senior" : "Junior";
   return `${emp} is ${level}`;
  }
console.log(checkEmployee("Rahul", 3)); */

// Get senior employees using function
const employees = [
  { name: "Rahul", role: "DevOps", experience: 5 },
  { name: "Anita", role: "Backend Developer", experience: 3 },
  { name: "Abhishek", role: "QA Manager", experience: 14 },
  { name: "Diganta", role: "Frontend Developer", experience: 2 },
  { name: "Riya", role: "QA Tester", experience: 6 }
];

function getSeniorEmployees(){
    return employees.filter(emp => emp.experience>=5)
    .map(emp => emp.name)
    }
let result = getSeniorEmployees();
console.log(result);