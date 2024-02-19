
// Promise creation

const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("This need to be done");
    },1000)
    resolve();
});


// promise consumption

promise.then(function(){
    console.log("Promise consumed");

})


// same work can be done in this way

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("no way are u crazyy");
    },1000)
    resolve();
}).then(function(){
    console.log("Aysnc consumed ");
})


// how data is going in the lower bench

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"kunal singh",age:19,gender:"Male"})
    },1000)
}).then(function(user){
    console.log(user);
})


// chaining method helps in data connection

new Promise(function(resolve,reject){
    setTimeout(function(){
        const error=true;
        if(!error){
            resolve({name:"vikram singh",age:34,gender:"Male"})
        }else{
            reject("Error: Something went wrong");
        }
    },1000)
}).then(function(user){
    console.log(user);
    return user.name;
}).then(function(username){
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("Sorted issued");
})


// async await can also be used in DB connection

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({name:"Run",age:12})
        }else{
            reject("Error : Js not working")
        }
    },1000)
})

async function consumepro(){
    try{
        const response=await promisefive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumepro();



// data fetch

async function getall(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
getall();