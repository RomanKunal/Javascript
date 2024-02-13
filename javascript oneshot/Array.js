//array is an object collection of diff dtypes it is resizables

const myarr=[0,1,2,3,4,5,"kunal",true]
console.log(myarr[3]);

myarr.push("singh")
console.log(myarr);

//unshift - adds the value in the array at the start
//shift - deletes the value in the array from start

console.log(myarr.includes(40));

// slice, splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B ", myarr);


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);
console.log(myn2);