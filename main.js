const emailInput = document.getElementById('emailInput');
const submitButton = document.querySelector('.left-container-button');
const errorMessage = document.querySelector('.error-message');


submitButton.addEventListener('click', function() {
    validateEmail();
});

function validateEmail() {
    if (emailInput.validity.valid) {
        emailInput.setCustomValidity('');
        errorMessage.style.display = 'none';
        // Perform additional actions if valid
        // This will link to another page if it is valid
        console.log('Email is valid');
    } else {
        emailInput.setCustomValidity('Please enter a valid email address');
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.style.display = 'block';
        emailInput.style.borderColor = 'red';
        
        console.log('Email is invalid');
    }
}