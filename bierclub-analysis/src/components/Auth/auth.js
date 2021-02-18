class Auth {
  constructor() {
    this.auth = false;
  }

  login(cb) {
    this.auth = true;
    cb();
  }

  logout(cb) {
    this.auth = false;
    cb();
  }

  isAuth() {
      return this.auth;
  }
}

export default new Auth()