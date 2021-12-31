'use strict';

import Validation from './Validation.js';
import Storage from './Storage.js';
import Helper from './Helper.js';

const registerForm = document.querySelector('#register');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirm_passwordInput = document.getElementById('confirm_password');
const check_boxInput = document.getElementById('check_box');
const msgEl = document.querySelector('.msg');

Helper.deleteLogin();

function register(e) {
  e.preventDefault();

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    confirm_password: confirm_passwordInput.value,
    check_box: check_boxInput.checked,
  };

  Validation.emptyCk(data, 'reg');

  if (Validation.isValid()) {
    const user = {
      name: Validation.userData[0].name,
      email: Validation.userData[0].email,
      password: Validation.userData[0].password,
    };

    const allUser = [...Storage.getData(), user];
    Storage.saveData(allUser);
    Helper.showMsg(
      msgEl,
      'Register success, Redirect to login page.',
      'success'
    );
    Helper.blankInputs(registerForm);

    setTimeout(() => {
      Helper.removeMsg(msgEl);
      Helper.redirect('login.html');
    }, 2000);
  }
}

registerForm.addEventListener('submit', register);
