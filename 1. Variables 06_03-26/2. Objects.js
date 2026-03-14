// Practice set to define an object and print the object, find type of the object and print its individual elements
/* const employee ={
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
console.log(Author); */

/* const students ={
    student1:"Abhishek",
    student2:"Saanvi",
    student3:"Sayantani"
}
console.log("Student 1 is: "+students.student1); */




// Program to add and element and change value of an existing element of an object and print their values
/* const product ={
    productName: "Sony Soundbar",
    productPrice: 55000,
    onSale:false,
    offerAvailable:false,
    productDescription:"Sony Dolby Atmos Soundbar SNDA449",
    maxPowerOutput:"1000 Watts",
    discountAvailable:"15%"
}
console.log("Product details before discount and offer!")
console.log("Product Name = "+product["productName"]);
console.log("Product Price = "+product["productPrice"]);
console.log("Product on Sale? = "+product["onSale"]);
console.log("Offer Available on Product = "+product["offerAvailable"]);
console.log("Product Description= "+product["productDescription"]);
console.log("Max Power Output = "+product["maxPowerOutput"]);
console.log("Discount Available = "+product["discountAvailable"]);

// Assigning Object values
product["productPrice"]="39000"
product["onSale"]=true;
product["offerAvailable"]=true;
product["discountAvailable"]="35%";

console.log("\n\nProduct details After discount and offer!")
console.log("Product Name = "+product["productName"]);
console.log("Product Price = "+product["productPrice"]);
console.log("Product on Sale? = "+product["onSale"]);
console.log("Offer Available on Product = "+product["offerAvailable"]);
console.log("Product Description= "+product["productDescription"]);
console.log("Max Power Output = "+product["maxPowerOutput"]);
console.log("Discount Available = "+product["discountAvailable"]);
 */




//Program to take a student object and identify pass and fail using if
/* const student={
    name:"Abhishek",
    marks:29
}
if(student["marks"]>40)
{
    console.log(student["name"]+ " Has Passed!")
}
else
    console.log(student["name"]+ " Has Failed!") */




// Program to add an element to an object and print it
/* const product={
    name:"Hawkins Air Frier",
    price:1350
}
product["rating"]=3.9;
console.log(product) */



//Program to write and print nested object
const Employee={
    empName:"Abhishek",
    empId:"Ds005",
    role:"QA Manager",
    email:"abhishek.mukherjee@digitalsherpa.ai",
    phone:7797273337,

    address:{
        addr:"Tirupati Neer Apartment, BC331, 3rd Floor",
        city:"Kolkata",
        state:"West Bengal",
        pin:721306
    }
}
console.log("Employee Name:- "+Employee.empName);
console.log("Employee ID:- "+Employee.empId);
console.log("Employee Role:- "+Employee.role);
console.log("Employee Email:- "+Employee.email);
console.log("Employee Phone Number:- "+Employee.phone);
console.log("Employee Address:- "+Employee.address.addr +" \n"+Employee.address.city+" \n"+ Employee.address.state+" \n"+Employee.address.pin);
