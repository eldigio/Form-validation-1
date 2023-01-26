'use strict';

// Selectors
const form = document.querySelector('form');
const email = document.querySelector("input[name='email']");
const password = document.querySelector("input[name='password']");
const inputFields = document.querySelectorAll(
  'form input[required], form select[required]'
);
const errorFields = document.querySelectorAll('.invalid-feedback');
const passwordButton = document.querySelector('.btn-password-toggle');

// Funzioni

// Event listeners
form.addEventListener('submit', event => {
  event.preventDefault();
  const arrayInputs = [...inputFields];
  console.log(arrayInputs);
  arrayInputs.forEach(value => {
    const invalid = document.querySelector(`.invalid-${value.name}`);
    if (!value.value) {
      invalid.classList.add('d-block');
      invalid.textContent = 'Campo obbligatorio';
    } else {
      invalid.classList.remove('d-block');
      invalid.textContent = '';
    }
  });
});
