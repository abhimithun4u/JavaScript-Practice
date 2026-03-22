// to string function converts and array to a string -> arr.toString() // Returns string
/* let arr=[23,34,43,67,12,76,89,15];
let str=arr.toString();
console.log(str);


// join function allows array elements to be joined using provided delimeter, it returns a string
let jn =arr.join(" + ");
console.log(jn);

// function to remove last element of an array array pop
arr.pop();
console.log(arr);

// Function to add an array element at the last of the array -> push
arr.push(49);
console.log(arr); */

// Function to remove the first element from the array -> shift()
/* let array = [34,79,65,23,50,122,76];
array.shift();
console.log(array);

// Function to add the first element from the array -> unshift()
array.unshift(126);
console.log(array); */

// Function to check whether the element is present within an array includes() → check existence
/* let arr = ["Abhishek","Saanvi","Nikhil","Rohan","Riya"];
if(arr.includes("Riya"))
{
    console.log("Riya is available in the Array");
}
else console.log("Riya is Not Available") */

// Function to delete an array element -> delete function deltes the element
//  without changing the array size
/* let num =[1,2,3,4,5,6,7,8,9];
delete num[0];
console.log(num);
 */
// Fuction to concat two arrays
/* let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];

let finalArr1=arr1.concat(arr2); // concating arr1 with arr2
console.log(finalArr1);
let finalArr2=arr1.concat(arr2,arr3); // concating arr1 with arr2 and arr3
console.log(finalArr2); */

// function to sort -> sort function sort the data alphabetically, 
// if you want to sort in asc or desc you need to use the compare function
/* let arr=[45,23,69,134,28,56,36];
arr.sort();
console.log(arr); // sort function always returns in alphbetical order
// If we need to sort in ascending order then we need to use compare function
compare =(a,b)=>{
    return a-b;
}
arr.sort(compare);
console.log(arr); */

// Splice and slice function splice(from position,number of elements to remove, replaced numbers seperated by comma like 2,56,78)
let arr=[2,4,6,8,1,3,5,7,9];
arr.splice(2,3,4,4);
console.log(arr);
let arr1=arr.slice(5); // slice prints the remaining array from the index number to the end of the array
console.log(arr1);

// Reverse function reverses the array
/* let arr1=[45,67,76,94,23,20]
arr1.reverse();
console.log(arr1); */