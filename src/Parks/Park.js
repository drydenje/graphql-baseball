const { parks } = require("./data");
class Park {
  static all() {
    return parks;
  }
}

module.exports = {
  Park,
};
