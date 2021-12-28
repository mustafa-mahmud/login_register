'use strict';

const loginForm = document.querySelector('#login');

function login(e) {
  e.preventDefault();
  console.log('login');
}

//////////////////
loginForm.addEventListener('submit', login);
