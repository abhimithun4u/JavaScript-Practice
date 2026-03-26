/* new Promise((resolve,reject)=>{
    resolve(5);
})
.then((val)=>{
    return val*3;
})
.then((newval)=>{
    return newval+10;
})
.then((finalVal)=>{
    console.log(finalVal);
}) */


new Promise((resolve,reject)=>{
    resolve(2);
})
.then((val1)=>{
    return val1*5;
})
.then((val2)=>{
    return val2-3;
})
.then((val3)=>{
    return val3*2;
})
.then((final)=>{
    console.log(`The Final Value is:- ${final}`);
})