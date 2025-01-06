let getRollNo = async () =>{
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            let rollNo = "456";
            if(rollNo != ''){
                resolve(rollNo); // it will call then
            }else {
                reject("Api dost have rollNo");
            }
        }, 4000);
    });
    return promise;
}

let getStudDetailByRollNo = async (rollNo) =>{
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

let load = async () => {
    let rollNo = await getRollNo();
    console.log(rollNo);
    let studDetails = await getStudDetailByRollNo();
    console.log(studDetails);
}
load();