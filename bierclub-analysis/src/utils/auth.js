class Auth {
  constructor() {
    this.auth = false;
  }

  login(cb) {
    this.auth = true;
    cb();
  }

  isAuth() {
      return this.auth;
  }
}

export default new Auth();