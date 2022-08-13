const users = [
    {title: 'Junior', role: 'Developer'},
    {title: 'Mid-Level', role: 'Developer'},
];

function getUser(){

    setTimeout(() => {
        
        let output = '';
        users.forEach(user => {
            output += `<li> ${user.title} </li>`;
        })

        document.body.innerHTML = output;
    }, 1000);
}

// Promise
function createUser(user){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            users.push(user);

            const err = false;
            if(!err){
                resolve();
                
            }else{
                reject('Process rejected!');
            }

        }, 2000);

    });
}

// Async / Await();
async function asyncAwait(){

    await createUser({title: 'Senior', role: 'Developer'});
    getUser();
}

asyncAwait();

