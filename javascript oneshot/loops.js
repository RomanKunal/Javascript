// for loop used for known iteration

//for (let index = 0; index < 10; index++) {
 //   const element = index;
 //   console.log(element);
    
//}


// while loop

//let index=0
//while(index<=12){
//    console.log(index);
//    index+=2;
//}





// for of loop

const arr=[1,2,3,4,5]
for (const i of arr) {
    //console.log(i);
}


// MAPS is used to contain unique values and maintains the order of values
// for of is used in maps 

const map=new Map()
map.set("In","India")
map.set("US","america")
//console.log(map);

for (const [key,value] of map) {
    //console.log([key,value]);
}



// for in used in Object datatypes

const obj={
    name:"kunal",
    age:19,
    sex:"male"
}


for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
        
    }
}