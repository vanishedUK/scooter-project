class Scooter {
  static nextSerial = 0;

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }

  rent() {
    if (this.charge > 20 && this.isBroken == false) {
      this.user = null;
      this.station = null;
    } else if (this.charge <= 20) {
      throw new Error("scooter needs to charge");
    } else {
      throw new Error("scooter needs repair");
    }
  }

  dock(station) {
    this.user = null; // Removing user 
    this.station = station;
  }

  recharge() {
    let charge = this.charge;
    let rechargeInterval = setInterval(() => {
      if (charge >= 100) {
        clearInterval(rechargeInterval);
      }
      
      charge++;
      console.log(`Charge: ${charge}%`);
    }, 1000);
  }

  requestRepair() {
    let repairInterval = setInterval(() => {
      this.isBroken = false;
      clearInterval(repairInterval);
      console.log("repair completed");
    }, 5000);
  }
}

module.exports = Scooter
