//function add(num1,num2){
//    console.log(num1+num2);
//
//}
//add(4,6)


function add(a,b){
    let result=a+b;
    return result;
}
const res=add(9,9)
console.log(res);

// After return statement no value can executed


//when we need to pass the unknown parameter then use rest operator {...parameter}
function calculate(...num){
    return num;
}
console.log(calculate(200,300,4000));