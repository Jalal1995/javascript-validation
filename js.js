const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    //e.preventDefault();


    let buul = checkInputs();
    if (buul) e.preventDefault();
});

function checkInputs() {
    // trim to remove the whitespaces
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let buul = true;

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        buul = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        buul = false;
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        buul = false;
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
        buul = false;
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
        buul = false;
    } else{
        setSuccessFor(password2);
    }
    return buul;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}