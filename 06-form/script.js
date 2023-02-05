const form = document.getElementById('form');

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const nameError = document.querySelector('#name + span.error');
const phoneError = document.querySelector('#phone + span.error');
const passwordError = document.querySelector('#password + span.error');
const confirmPasswordError = document.querySelector('#confirmPassword + span.error');

const regexPhone = /^[\d\+][\d\(\)\ -]{9,15}\d$/;
const regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;


const inputs = document.querySelectorAll('form input')

inputs.forEach(i => i.addEventListener('input', function (event) {
    const currentInput = document.getElementById(`${i.id}`)
    const errorField = document.querySelector(`#${i.id} + span.error`)


    if (currentInput.validity.valid) {
        errorField.textContent = '';
        errorField.className = 'error';
    } else {
        showError(currentInput, errorField);
    }
}))

form.addEventListener('submit', function (event) {

    if (!name.validity.valid) {
        showError(name, nameError)
        event.preventDefault();
    }
    if (!phone.validity.valid) {
        showError(phone, phoneError)
        event.preventDefault();
    }
    if (!password.validity.valid) {
        showError(password, passwordError)
        event.preventDefault();
    }
    if (!confirmPassword.validity.valid) {
        showError(confirmPassword, confirmPasswordError)
        event.preventDefault();
    }

    if (!regexPhone.test(phone.value)) {
        phoneError.textContent = 'Not correct number'
        event.preventDefault();
    }

    if (!regexPass.test(password.value)) {
        passwordError.textContent = 'Password must contain at least one numeric digit, one uppercase and one lowercase letter, 8 to 40'
        event.preventDefault();
    }

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords must match'
        event.preventDefault();
    }
});

function showError(currentInput, errorField) {
    if (currentInput.validity.valueMissing) {
        errorField.textContent = `You need to enter a ${currentInput.id}.`;
    } else if (currentInput.validity.tooShort) {
        errorField.textContent = `${currentInput.id} should be at least ${currentInput.minLength} characters; you entered ${currentInput.value.length}.`;
    } else if (currentInput.validity.tooLong) {
        errorField.textContent = `${currentInput.id} should be no more then ${currentInput.maxLength} characters; you entered ${currentInput.value.length}.`;
    }

    errorField.className = 'error active';
}