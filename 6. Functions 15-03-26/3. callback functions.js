// callback function to check odd even
const oddEven=(num) =>{ 
  let status =  num%2==0 ? "Even" : "odd" ;
 console.log(num+" is "+status);
}

function checkOddEven(n)
{
    let number = 7;
    n(number);
}
checkOddEven(oddEven);



