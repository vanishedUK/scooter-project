const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

describe('ScooterApp', () => {
  let scooterApp;

  beforeEach(() => {
    scooterApp = new ScooterApp();
  });

  describe('registerUser', () => {
    test('should register user successfully', () => {
      const username = 'Ethan';
      const password = 'PasswordMultiverse';
      const age = 20;

      scooterApp.registerUser(username, password, age);

      expect(scooterApp.registeredUsers[username]).toBeInstanceOf(User);
    });

    test('should throw an error if user is already registered', () => {
      const username = 'Ethan';
      const password = 'PasswordMultiverse';
      const age = 20;

      scooterApp.registerUser(username, password, age);

      expect(() => {
        scooterApp.registerUser(username, password, age);
      }).toThrowError('already registered');
    });

    test('should throw an error if age is less than 18', () => {
      const username = 'Ethan';
      const password = 'PasswordMultiverse';
      const age = 15;

      expect(() => {
        scooterApp.registerUser(username, password, age);
      }).toThrowError('too young to register');
    });
  });

  describe('loginUser', () => {
    test('should log user in successfully', () => {
      const username = 'Ethan';
      const password = 'PasswordMultiverse';
      const age = 20;

      scooterApp.registerUser(username, password, age);
      scooterApp.loginUser(username, password);

      const user = scooterApp.registeredUsers[username];
      expect(user.isLoggedIn).toBe(true);
    });

    test('should throw an error if username or password is incorrect', () => {
      const username = 'Ethan';
      const password = 'PasswordMultiverse';
      const age = 20;

      scooterApp.registerUser(username, password, age);

      expect(() => {
        scooterApp.loginUser(username, 'username is incorrect');
      }).toThrowError('username or password is incorrect');
    });
  });

  describe('logoutUser', () => {
    test('should log user out successfully', () => {
      const username = 'Ethan';
      const password = 'PasswordMultiverse';
      const age = 20;

      scooterApp.registerUser(username, password, age);
      scooterApp.loginUser(username, password);
      scooterApp.logoutUser(username);

      const user = scooterApp.registeredUsers[username];
      expect(user.isLoggedIn).toBe(false);
    });

    test('should throw an error if no such user is logged in', () => {
      const username = 'Ethan';

      expect(() => {
        scooterApp.logoutUser(username);
      }).toThrowError('no such user is logged in');
    });
  });
});
