'use strict';

import Validation from './Validation.js';
import Storage from './Storage.js';
import Helper from './Helper.js';

const loginForm = document.querySelector('#login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const msgEl = document.getElementById('msg');

Helper.deleteLogin();

function login(e) {
  e.preventDefault();
  const data = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  Validation.emptyCk(data, 'log');

  if (Validation.isValid()) {
    const users = Storage.getData();
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (!user)
      Helper.showMsg(
        msgEl,
        'Email/Password does not match, Please try again.',
        'danger'
      );
    else {
      localStorage.setItem('login', user.name);
      Helper.blankInputs(loginForm);
      Helper.showMsg(msgEl, 'Login success, Redirect soon.', 'success');
      setTimeout(() => {
        Helper.redirect('home.html');
      }, 2000);
    }

    setTimeout(() => Helper.removeMsg(msgEl), 2000);
  }
}

//////////////////
loginForm.addEventListener('submit', login);
