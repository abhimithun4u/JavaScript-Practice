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
function getNumber(){
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
fetchNumber();