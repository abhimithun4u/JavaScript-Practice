//let arr=["Abhishek","Saanvi","Riya","Rahul",null,"Ankit"];
//console.log(arr);
// Printing specific items of an array, index starts with 0
//console.log(arr[1]);

// finding length of the array
/* let len = arr.length;
console.log(len); */

// Changing values of an existing array
/* arr[4]="Rohan";
console.log(arr); */

// Array always return objects, here arr is the array and its type is object
//console.log(typeof(arr));



// Program to print all array elements using for loop
/* let arr=["Abhishek","Saanvi","Riya","Rahul","Mithun","Ankit"];
let len=arr.length;
console.log("The Array Elemets Are As Follows:- ")
for(let i=0;i<len;i++)
{
    console.log(arr[i]);
} */

// Program to add all elements of an array
/* let arr=[1,2,3,4,5,6,7,8,9,10];
let total=0;
let i=0;
while(i<arr.length)
{
    total+=arr[i];
    i++;
}
console.log("The sum of all array elements is:- "+total); */



// Program to find sum of even numbers within an array
/* let arr = [1, 2, 3, 4, 5, 6];
let sum =0;
for(let i=0; i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        sum+=arr[i];
    }
}
console.log("The sum of even numbers is:-", sum); */


//Program to find maximum number within an array
/* let arr=[21,3,56,198,49,55,21,79];
let max=arr[0];
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log("The Maximum number within the array is:- "+max); */

//Program to Reverse array (no reverse())
/* let arr=[3,6,9,12,15];
len=arr.length;
let arr1=[];
for(let i=len;i>0;i--)
{
    arr1[len-i]=arr[i-1];
}
console.log(arr1); */


//program to remove duplicates from an array without using any fuunction
/* let arr = [1, 2, 2, 3, 1];

let unique = [];
let k = 0;

for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < k; j++) {
        if (arr[i] === unique[j]) {
            found = true;
            break;
        }
    }

    if (found === false) {
        unique[k] = arr[i];
        k++;
    }
}

console.log(unique); */

let arr = [21,3,56,198,49,55,21,79,143,257,59];

let max = arr[0];
let secondMax = arr[0];

for(let i = 0; i < arr.length; i++)
{
    if(arr[i] > max)
    {
        secondMax = max;
        max = arr[i];
    }
    else if(arr[i] > secondMax && arr[i] !== max)
    {
        secondMax = arr[i];
    }
}

console.log("Max:", max);
console.log("Second Max:", secondMax);