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

// Functions
const showError = (element, mex) => {
  element.classList.add('d-block');
  element.textContent = mex;
};

const hideError = element => {
  element.classList.remove('d-block');
  element.textContent = '';
};

const validateRequiredInputs = value => {
  const invalid = document.querySelector(`.invalid-${value.name}`);
  if (!value.value) showError(invalid, 'Campo obbligatorio');
  else hideError(invalid);
};

const validateEmail = () => {
  const emailValue = email.value;
  const errorEmail = document.querySelector('.invalid-email');
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(emailValue)) showError(errorEmail, 'Email non valida');
  else hideError(errorEmail);
};

// Event listeners

// Live input check
email.addEventListener('blur', validateEmail);

[...inputFields].forEach(e =>
  e.addEventListener('input', () => validateRequiredInputs(e))
);

form.addEventListener('submit', event => {
  event.preventDefault();

  let hasErrors = false;

  [...inputFields].forEach(value => {
    validateRequiredInputs(value);
  });
  validateEmail();

  [...errorFields].forEach(value => {
    if (value.textContent) hasErrors = true;
  });

  if (!hasErrors) console.log('submit');
  else console.log('nope');
});
