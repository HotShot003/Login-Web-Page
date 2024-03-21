const a = [
    {
        username: "John",
        password: "12345"
    },
    {
        username: 'Anurag',
        password: '003'
    },
    {
        username:'Alice',
        password:'222'
    },
    {
        username:'Bob',
        password:'01'
    },
    {
        username:'Charlie',
        password:'121'
    }
    
];
function submit() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // let user = a.find(user => user.username === username && user.password === password);
    let user;
    a.forEach(ele => {
        if (ele.username == username) {
            if (ele.password == password){
                user=true;
            }
            else{ false;}
        }
    })

    
    if (user) {
        alert("Welcome , " + username + "!");
        clear();
        // username = document.getElementById('username').value = '';
        // password = document.getElementById('password').value = '';

    } else {
        alert("Wrong username or password.");
        clear();
        // username = document.getElementById('username').value = '';
        // password = document.getElementById('password').value = '';
    }
}


function clear() {
    username = document.getElementById('username').value = '';
    password = document.getElementById('password').value = '';
}