const users = [
  { id: 1, name: "Rahul", active: true },
  { id: 2, name: "Amit", active: false },
  { id: 3, name: "Suman", active: true }
];
function processUsers(users){
    const newUsers = [];
    return pr = new Promise((resolve,reject)=>{
      users.forEach((items)=>{
        if(items.active===true){
            newUsers.push(items.name.toUpperCase());
        }
    })
    resolve(newUsers);
    })
}
processUsers(users)
.then((users)=>{
    console.log(users)
})
