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
