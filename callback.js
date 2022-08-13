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

// Callback
function createUser(user, callback){
    setTimeout(() => {
        users.push(user);
        callback();
    }, 2000);
}

// getUser();

createUser({title: 'Senior', role: 'Developer'}, getUser);





