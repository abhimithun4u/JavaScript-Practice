//promise all function returns all promises together if none gets error and when all is executed
let p1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("First Promise");
    },3000)
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Second Promise")
    },1000);
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Third Promise");
    },4000);
});

let pAll = Promise.all([p1,p2,p3]);
pAll.then((value)=>{
    console.log(value);
})