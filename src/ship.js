function Ship(startingPort) {
    this.startingPort = startingPort;
    this.passengers = 0;
};

Ship.prototype.onBoard = function() {
     this.passengers += 1;
    
};
    


module.exports = Ship;