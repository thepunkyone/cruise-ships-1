class Port {
    constructor(currentPort) {
        this.currentPort = currentPort;
        this.ships = [];
    }

    setSail() {
        this.currentPort = 0;
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip() {

        this.ships.shift();
    }




}

module.exports = Port;