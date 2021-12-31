class Storage {
  constructor() {}

  static saveData(data) {
    console.log(data);
    localStorage.setItem('register', JSON.stringify(data));
  }

  static getData() {
    return JSON.parse(localStorage.getItem('register'));
  }
}

export default Storage;
