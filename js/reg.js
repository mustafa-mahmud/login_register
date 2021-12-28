'use strict';

import Validation from './Validation.js';
import Storage from './Storage.js';
import Helper from './Helper.js';

const registerForm = document.querySelector('#register');
const alert = document.querySelector('.alert');

function register(e) {
  e.preventDefault();

  Validation.emptyCk();
  if (Validation.isValid()) {
    const user = {
      name: Validation.userData[0].name,
      email: Validation.userData[0].email,
      password: Validation.userData[0].password,
    };

    const allUser = [...Storage.getData(), user];
    Storage.saveData(allUser);
    Helper.showSuccess(alert);
    Helper.blankInputs(registerForm);

    setTimeout(() => {
      Helper.removeSuccess(alert);
      Helper.redirect('login.html');
    }, 2000);
  }
}

registerForm.addEventListener('submit', register);
