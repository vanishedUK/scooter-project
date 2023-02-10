const User = require('../src/User')

describe("User", () => {
  let user;

  beforeEach(() => {
    user = new User("Ethan", "PasswordMultiverse", 30);
  });

  it("should have a username", () => {
    expect(user.username).toBe("Ethan");
  });

  it("should have a password", () => {
    expect(user.password).toBe("PasswordMultiverse");
  });

  it("should have an age", () => {
    expect(user.age).toBe(30);
  });

  it("should have a loggedIn property that is false by default", () => {
    expect(user.loggedIn).toBe(false);
  });

  describe("login", () => {
    it("should set loggedIn to true if the password is correct", () => {
      user.login("PasswordMultiverse");
      expect(user.loggedIn).toBe(true);
    });

    it("should throw an error if the password is incorrect", () => {
      expect(() => {
        user.login("wrongpassword");
      }).toThrowError("incorrect password");
    });
  });

  describe("logout", () => {
    it("should set loggedIn to false", () => {
      user.login("PasswordMultiverse");
      user.logout();
      expect(user.loggedIn).toBe(false);
    });
  });
});

