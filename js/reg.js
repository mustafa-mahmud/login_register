'use strict';

import Validation from './Validation.js';

const registerForm = document.querySelector('#register');

function register(e) {
  e.preventDefault();

  Validation.emptyCk();
  if (Validation.isValid()) {
  }
}

registerForm.addEventListener('submit', register);
