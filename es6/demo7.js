let getRollNo = () =>{
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            let rollNo = "456";
            resolve(rollNo); // it will call then
        }, 4000);
    });
    return promise;
}



let rollNoPromise = getRollNo();
rollNoPromise.then((rollNo)=>{
    console.log(rollNo);
    
});

