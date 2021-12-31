'use strict';

import Helper from './Helper.js';

const strongEl = document.querySelector('strong');
const logoutEl = document.getElementById('logout');

strongEl.textContent = Helper.capitalize(ckUser);

///////////////
logoutEl.addEventListener('click', (e) => {
  e.preventDefault();

  Helper.redirect('login.html');
});
