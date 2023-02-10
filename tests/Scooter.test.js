const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe("scooter instance integrity check", () => {
  const scooter = new Scooter("Manchester");
  test("instance has correct properties", () => {
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("charge");
    expect(scooter).toHaveProperty("serial");
    expect(typeof scooter.isBroken).toBe("boolean");
    expect(scooter.station).toBe("Manchester");
  });

  test("instance static value incrementing", () => {
    const scooter_2 = new Scooter("London");
    expect(scooter_2.serial).toBe(scooter.serial + 1);
  });
});
