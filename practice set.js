/* let arr=["a", "b", "c"];
arr.forEach((elements=>{
    console.log(elements.toUpperCase());
})) */

/* let arr=[1,2,3];
function squareNumbers(arr){
   return arr.map(item=>item*item);
    
}
const finalArray=squareNumbers(arr);
console.log(finalArray); */

/* function getMessage() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Bondhu");
        },2000);
    })
};
getMessage()
.then((value)=>{
    console.log(value);
}); */

/* const num=18;
let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(num>10){
            resolve("Number is Big");
        }
        else{
            reject("Number is Small")
        }
    },2000)
})

myPromise
.then((val)=>{
    console.log(val);
})
.catch((val)=>{
    console.log(val);
}) */

/* function checkResult(marks){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(marks>=40){
                resolve("Passed");
            }
            else{
                reject("Failed");
            }
        },1000)
    })

}

checkResult(39)
.then((val)=>{
    console.log(val);
})
.catch((error)=>{
    console.log(error);
}) */

/* function login(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==="admin" && password==="12345"){
                resolve("Login successful");
            }
            else{
                reject("Invalid Credentials");
            }
        },1000)
    })
}
login("admin","1245")
  .then(val => console.log(val))
  .catch(err => console.log(err)) */

/* function login(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==="Admin" && password==="1234"){
                resolve("Welcome "+username);
            }
            else{
                reject("Invalid Credentials");
            }
        },1000)
    })
}

async function loginUser(){
    try{
        let result = await login("Admin","1234");
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
loginUser(); */

/* function getMovieRating(movieName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(movieName==="KGF"){
                resolve(9);
            }
            else if(movieName==="Pushpa"){
                resolve(8);
            }
            else{
                reject("Movie Not Found");
            }
        },1000)
    })
}

async function getRating(){
    try{
        const promises =[
            getMovieRating("KGF"),
            getMovieRating("Pushpa"),
            getMovieRating("Avengers")
        ]

        
    const results = await Promise.allSettled(promises);
    console.log("Ratings:", results);
    }
    catch(err){
        console.log("Error: "+err);
    }
}
getRating(); */

/* function downloadFile(fileSize){
    return new Promise((resolve,reject)=>{
        if(fileSize<100){
            resolve("Download complete !");
        }
        else{
            reject("File too large");
        }
    })
}

async function getFileInfo(){
    try{
        let success = await downloadFile(189);
        console.log(success+" Opening File")
    }
    catch(err){
        console.log("Download Failed. "+err);
    }
}

getFileInfo(); */


function checkResult(score){
    return new Promise((resolve,reject)=>{

            if(score>=50){
                resolve("Pass");
            }
            else
                reject("Fail");
            
        });
}
async function processScores(){
    const scores = [80, 45, 60];
    for(let score of scores){
    try{
        let result = await checkResult(score);
        console.log(`Score ${score} is ${result}`);
    }
    catch(err){
        console.log(`Score ${score} is ${err}`);

    }
}
}
processScores();
