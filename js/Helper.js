import Validation from './Validation.js';

class Helper {
  constructor() {}

  static showError(key, msg) {
    const parent = document.getElementById(`${key}`).closest('.form-group');
    parent.querySelector('.invalid-feedback').textContent = `${this.capitalize(
      this.replaceText(key, '_')
    )} ${msg}`;
    parent.querySelector('.invalid-feedback').classList.add('d-block');
  }

  static removeError(key) {
    const parent = document.getElementById(`${key}`).closest('.form-group');
    parent.querySelector('.invalid-feedback').textContent = ``;
    parent.querySelector('.invalid-feedback').classList.remove('d-block');
  }

  static showSuccess(el) {
    el.classList.add('visible');
    el.classList.remove('invisible');
  }

  static removeSuccess(el) {
    el.classList.remove('visible');
    el.classList.add('invisible');
  }

  static redirect(link) {
    window.location.href = link;
  }

  static capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  static replaceText(text, rep) {
    return text.replace(rep, ' ');
  }

  static blankInputs(form) {
    const inputs = form.querySelectorAll('input');
    inputs.forEach((input) => (input.value = ''));
  }
}

export default Helper;
