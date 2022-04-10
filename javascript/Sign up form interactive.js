// export default nameStore;
let fullName = document.getElementById('name');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
let email = document.getElementById('email');
let dateOfBirth = document.getElementById('DOB');
let signUpBtn = document.getElementById('btn');


let nameStore = [{}];


signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (fullName.value === '' || fullName.value === null) {
        alert("Please enter the full name")
        console.error("Please enter the full name");
    }

    if (password.value === '' || password.value === null || password.value === 'password' || password.value != 6) {
        console.error('Password must be 6 characters ')
    }

    if (confirmPassword.value != password.value) {
        console.error('Confirm Password do not match ')
    }

    if (dateOfBirth.value === '' || dateOfBirth.value === null || dateOfBirth.value < 18) {
        console.error('Please enter the date of birth')
    }




    nameStore[0].name = fullName.value;
    nameStore[0].pswd = password.value;
    nameStore[0].cpswd = confirmPassword.value;
    nameStore[0].Email = email.value;
    nameStore[0].DOB = dateOfBirth.value;

    localStorage.setItem('User Info', nameStore);

    let a = location.href = 'file:///C:/Users/Ludacris%20Lunaism/getUserData.html';

})



// console.log(localStorage.getItem('User Info')
//     nameStore.push(fullName.value);
//     nameStore.push(password.value);
//     nameStore.push(confirmPassword.value);
//     nameStore.push(email.value);
//     nameStore.push(dateOfBirth.value);
