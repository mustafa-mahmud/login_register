import Helper from './Helper.js';

class Validation {
  nameInput = document.getElementById('name');
  emailInput = document.getElementById('email');
  passwordInput = document.getElementById('password');
  confirm_passwordInput = document.getElementById('confirm_password');
  check_boxInput = document.getElementById('check_box');
  allInvalid = [...document.querySelectorAll('.invalid-feedback')];

  constructor() {
    this.isEmpty = false;
    this.userData = [];
  }

  emptyCk() {
    this.userData = [
      {
        name: this.nameInput.value,
        email: this.emailInput.value,
        password: this.passwordInput.value,
        confirm_password: this.confirm_passwordInput.value,
        check_box: this.check_boxInput.checked,
      },
    ];

    const bool = Object.values(this.userData[0]).every((val) => val);

    if (!bool) {
      for (const [key, value] of Object.entries(this.userData[0])) {
        if (!value) Helper.showError(key, `Please fill the`);
        else Helper.removeError(key);
      }
    } else {
      const keys = Object.keys(this.userData[0]);
      keys.forEach((key) => Helper.removeError(key));

      this.lengthCk('name', this.userData[0].name, 4);
      this.lengthCk('password', this.userData[0].password, 5);
      this.passwordMatch();
    }
  }

  lengthCk(key, val, len) {
    if (val.length <= len) Helper.showError(key, `must be up to ${len} chars`);
    else Helper.removeError(key);
  }

  passwordMatch() {
    if (this.userData[0].password !== this.userData[0].confirm_password) {
      Helper.showError('confirm_password', `password does not match`);
    } else {
      Helper.removeError('confirm_password');
    }
  }

  isValid() {
    return this.allInvalid.every((el) => el.textContent === '');
  }
}

export default new Validation();
