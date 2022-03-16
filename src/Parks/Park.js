const { parks } = require("./data");
class Park {
  static all() {
    return parks;
  }

  static byKey(key) {
    const foundPark = parks.find((park) => {
      return park.key === key;
    });
    return foundPark;
  }
}

module.exports = {
  Park,
};
