// First program to ask for status and depending on status
//  the actual case will be executed or else default value will be printed
/* let examStatus = prompt("Please Enter Status:- ");

switch(examStatus)
{
    case "pass":
        console.log("Exam Passed");
        break;
    case "failed":
        console.log("Exam Failed");
        break;
    case "skip":
        console.log("Exam Skipped");
        break;
    default:
        console.log("Status Unknown");
} */

// Second switch program to ask the fruit and print the fruit color
// if case dosent match then default value will be printed
// testing second program with switch

let fruit =prompt("Enter the fruit:- ");

switch(fruit){
    case "apple":
        console.log("Apple is Red");
        break;
    case "banana":
        console.log("Banana is Yellow");
        break;
    case "Orange":
        console.log("Orange is Orange");
        break;
    default:
        console.log("Fruit not available");
}