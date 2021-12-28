class Storage {
  constructor() {}

  saveData(data) {
    localStorage.setItem('register', data);
  }
}
