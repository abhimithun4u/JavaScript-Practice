//Basic promice understanding
let myPromise = new Promise((resolve,reject)=>{
    console.log("Promise is Pending!");
    let val = false;
    setTimeout(()=>{
    if(val){
        resolve("Promise is successful!");
    }
    else{
        reject("Promise failed");
    }
    },5000);
})

myPromise
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})


/* function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "abhishek" && password === "1234") {
        resolve("Login Successful ✅");
      } else {
        reject("Invalid Credentials ❌");
      }
    }, 2000);
  });
}

loginUser("abhishek", "1234")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  }); */

  