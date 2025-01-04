
/*var fname = "Amit";
var age = 34;
var price = 45.56;
var flag = true;
var lname;
console.log(lname);
*/



function sum(x1=0,x2=0){
    var res = x1 + x2;
    return res;
}

function fullName(fname='',lname=''){
    var res = fname + " " + lname;
    return res;
}
let fullname = fullName("Amit");
console.log(fullname);

var result = sum(4);
console.log("Sum:", result);

