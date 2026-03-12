let age = prompt("Please Enter Your Age:- ");
age= Number.parseInt(age);
console.log(age);
if(age<0)
{
    console.log("Not a Valid Age !")
}
else if(age>0 && age <10)
{
    console.log("You are a kid right now")
}
else if(age>10 && age <18)
{
    console.log("You can ride after 18")
}
else
{
    console.log("You can ride as you are above 18")
}