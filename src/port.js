const Ship = require("../src/Ship");
const Itinerary = require("./itinerary");

function Port(currentPort) {
  this.currentPort = currentPort;
}

Port.prototype.setSail = function() {
  this.currentPort = 0;
};

module.exports = Port;
