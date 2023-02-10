const Scooter = require('../src/Scooter')
const User = require('../src/User')

class ScooterApp {
  constructor() {
    this.stations = {
      "Manchester": [],
      "London": [],
      "Stafford": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (this.registeredUsers[username]) {
      throw new Error("already registered");
    } else if (age < 18) {
      throw new Error("too young to register");
    } else {
      this.registeredUsers[username] = new User(username, password, age);
      console.log('user has been registered');
      return this.registeredUsers[username];
    }
  }

  loginUser(username, password) {
    let user = this.registeredUsers[username];
    if (!user || !user.login || user.login(password) === false) {
      throw new Error("username or password is incorrect");
    }
    user.isLoggedIn = true;
    console.log('user has been logged in');
  }

  logoutUser(username) {
    let user = this.registeredUsers[username];
    if (!user) {
      throw new Error("no such user is logged in");
    }
    user.isLoggedIn = false;
  }
}

module.exports = ScooterApp
