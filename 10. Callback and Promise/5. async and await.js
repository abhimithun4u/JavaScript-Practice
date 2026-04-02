// Basic program to use async/await using promise
/* function loginUser(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==="Abhishek" && password==="12345"){
                resolve("Login Successful!");
            }
            else
                reject("Invalid Credentials!");
        },2000);
    })
}

async function login(){
    try{
        let res= await loginUser("Abhishek","12345");
        console.log(res);
    }
    catch(err)
    {
        console.log(err);
    }
}
login(); */

// Program to fetch a number using async and await
/* function getNumber(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(15),2000);
    });
}
async function fetchNumber(){
    try{
        let res = await getNumber()
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}
fetchNumber(); */

/* function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Abhishek", age: 30 }), 1000);
  });
}

async function fetchUser() {
    try{
        let result = await getUser()
        console.log(`${result.name} is ${result.age} years old`);
    }
    catch(error){
        console.log(error);
    }
}
fetchUser(); */

function loginUser(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      success ? resolve("Login Success") : reject("Login Failed");
    }, 1000);
  });
}
async function loginInfo(){
    try{
        let Info = await loginUser(false)
        console.log(Info);
    }
    catch(error){
        console.log(error);
    }
}
loginInfo();