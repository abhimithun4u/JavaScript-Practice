/* Scenario:
checkUser()
loadDashboard()
logout()

👉 sob Promise + async/await diye */

function checkUser(username,password){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(username==="admin" && password==="1234"){
                resolve("User validated! \n Login Successful")
            }
            else{
                reject("Invalid User credentials! Login Failed");
            }
        },1000);
    })
}

function loadDashboard(){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Dashboard Loaded")
    },2000);
    })
}

function logout(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User Logged Out")
        },1000)
    })
}

async function userJourney(){
    try{
        let userStatus = await checkUser("admin","1234")
        console.log(`${userStatus} Welcome Admin`);

        let dashboardStats = await loadDashboard();
        console.log(dashboardStats);

        let logoutStats = await logout();
        console.log(logoutStats);
    }
    catch(err){
        console.log(err);
    }
}

userJourney();