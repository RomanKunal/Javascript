// this keyword is used to refer the current context
// this keyword is used mostly in object function


const user={
    username:"kunal",
    welcome:function() {
        console.log(`${this.username},welcome sir`);
    }
}
user.welcome()

// arrow function is same as function just remove function keyword
// if we used curly braces in arrow function then we must use return keyword
// if we didnt used curly bracket then we can do like this  (num1,num2)=>(num1+num2)

const call=()=>{
    let username="allah ho jesus"
    console.log(username);
}
call()