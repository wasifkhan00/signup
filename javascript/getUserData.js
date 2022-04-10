// var outPut = document.getElementById('output');
//     outPut.value = userName.value
var userName = document.getElementById('username');
var password = document.getElementById('password');
var button = document.getElementById('btn');

let guestUser = 'guestuser@gmail.com';
let guestUserPassword = '123456';

var emails = [];
var securities = [];


button.addEventListener('click', (e) => {

    emails.push(userName.value);
    securities.push(password.value);


    if (userName.value === guestUser && password.value === guestUserPassword) {

        location.href = 'https://stackoverflow.com/';

        //         console.log('Youre ready to login');

    } else {
        console.error('username / password incorrect!')
    }

//     console.log(nameStore)

    //     if (password.value === guestUserPassword) {
    //         console.log('Password Correct!')
    //     } else {
    //         console.error('Please Enter the correct Password')
    //     }







})
