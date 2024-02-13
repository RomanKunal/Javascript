const obj1={1:'a',2:'b'}
const obj2={3:"c",4:"d"}
const obj3={...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(obj1));
console.log(Object.values(obj3));
console.log(Object.entries(obj2));

//de structure of the objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//json syntax generally key are also in string format and values are als in string
//{
 //   "name":"kunal",
 //   "age":19
//}

