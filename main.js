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
        const enteredEmail = emailInput.value;
        localStorage.setItem('enteredEmail', enteredEmail);
        window.location.href = 'successPage.html';
        console.log('Email is valid');
    } else {
        emailInput.setCustomValidity('Please enter a valid email address');
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.style.display = 'block';
        emailInput.style.borderColor = 'red';
        
        console.log('Email is invalid');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Store entered email address and then update DOM to include entered value
    const enteredEmail = localStorage.getItem('enteredEmail');
    const enteredEmailSpan = document.getElementById('entered-email-address');
    if (enteredEmailSpan) {
      enteredEmailSpan.textContent = enteredEmail;
    }
  });

