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

            const err = true;
            if(!err){
                resolve();
            }else{
                reject('Process rejected!');
            }

        }, 2000);


    });
}

// getUser();

createUser({title: 'Senior', role: 'Developer'})
    .then(getUser)
    .catch(result => console.log(result))
