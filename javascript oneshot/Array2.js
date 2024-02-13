const heros=["A","B","C","D","E"]
const heros1=["F","G","H"]
//heros.push(heros1)
//console.log(heros);
//console.log(heros[5][2]);


//const newarr=heros.concat(heros1);
//console.log(newarr)

//spread method 
const all=[...heros,...heros1]
console.log(all);