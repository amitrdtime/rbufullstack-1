let getRollNo = () =>{
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            let rollNo = "666";
            if(rollNo != ''){
                resolve(rollNo); // it will call then
            }else {
                reject("Api dost have rollNo");
            }
        }, 4000);
    });
    return promise;
}

let getStudDetailByRollNo = (rollNo) =>{
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let stuData = {rollNum: '456',fname: "Amit", lname: 'Deshmukh'};
            if(stuData.rollNum == rollNo) {
                resolve(stuData);
            } else {
                reject('RollNo dost match');
            }
        }, 3000)
    });
    return promise;
}


let rollNoPromise = getRollNo();
rollNoPromise.then((rollNo)=>{
    console.log(rollNo);
    getStudDetailByRollNo(rollNo).then((studDetails)=>{
        console.log(studDetails);
    }).catch((err)=>{
        console.log(err);
    });
}).catch((err)=>{
    console.log(err);
});

