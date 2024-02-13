// date single moment in time in a platform independent format
// 1 january 1970 to so on.....

//let mydate=new Date()
//console.log(mydate);
//console.log(mydate.toDateString());



let mydate=new Date(2023,0,21)
console.log(mydate.toDateString());

let newdate=new Date("01-14-2023")
console.log(newdate.toDateString());

let mytime=Date.now()
console.log(mytime);

console.log(Math.floor(mytime/1000));