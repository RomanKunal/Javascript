//switch (key) {
//    case value:
//        
//        break;
//
//    default:
//        break;
//}


// shift + alt + downarrow shortcut for duplicate the lines below


// falsey values = false,0,-0, bigint 0n, null, nan, "", undefined 

// truthy values= "0", 'false', " ", (),[],function(){}, {}
const month=2;
switch (month) {
    case 1:
        console.log("january");
        break;
    case 1:
        console.log("january");
        break;
    case 1:
        console.log("january");
        break;
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;

    default:
        console.log("sorry");
        break;
}


// nullish coalescing operator (??)  : null ,undefined

//val1=null ?? 10    output=10
//val1=undefined ?? 14    output=14
//val1=14??null     output=14
//console.log(val1);


//ternanry operator
// syntax 
//condition ? true: false

const a=10;
a>=10 ? console.log("greater ") : console.log("noiii");