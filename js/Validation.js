import Helper from './Helper.js';
import Storage from './Storage.js';

class Validation {
  allInvalid = [...document.querySelectorAll('.invalid-feedback')];

  constructor() {
    this.isEmpty = false;
    this.userData = [];
  }

  emptyCk(data, check) {
    this.userData = [data];

    const bool = Object.values(this.userData[0]).every((val) => val);

    if (!bool) {
      for (const [key, value] of Object.entries(this.userData[0])) {
        if (!value) Helper.showError(key, `Please fill the`);
        else Helper.removeError(key);
      }
    } else {
      const keys = Object.keys(this.userData[0]);
      keys.forEach((key) => Helper.removeError(key));

      if (check === 'reg') {
        console.log(456);
        this.lengthCk('name', this.userData[0].name, 4);
        this.lengthCk('password', this.userData[0].password, 5);
        this.passwordMatch();
        this.emailExist('email', this.userData[0].email);
      }
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

  emailExist(key, email) {
    const ckData = Storage.getData() ? Storage.getData() : null;
    console.log(ckData);
    if (!ckData) return;

    const bool = ckData.findIndex((obj) => obj.email === email);
    console.log(bool, email);
    if (bool !== -1) Helper.showError(key, `"${email}" already exists`);
    else Helper.removeError(key);
  }

  isValid() {
    return this.allInvalid.every((el) => el.textContent === '');
  }
}

export default new Validation();
