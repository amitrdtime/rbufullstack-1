let stud1 = {fname: "Amit", lname: "Deshmukh"};
let stud2 = {email: "Amit@gamil.com", phone: '1231231234'};



let studdetails = {...stud1, ...stud2, phone : '999999999'};
console.log(studdetails);