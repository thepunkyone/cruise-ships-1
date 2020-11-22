function Port(currentPort) {
    this.currentPort = currentPort;
    this.ships = [];
}

Port.prototype.setSail = function() {
    this.currentPort = 0;
}

Port.prototype.addShip = function(ship) {
    this.ships.push(ship);
}

Port.prototype.removeShip = function() {

    this.ships.shift();
}






module.exports = Port;