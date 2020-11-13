const Ship = require("../src/ship.js");

describe("constructor", () => {
    it("can be instantiated", () => {
        expect(new Ship("Dover")).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        const ship = {
            startingPort:"Dover",
        };

        expect(ship.startingPort).toBe("Dover");
    })

    it(" has initial passengers 0", () => {
        const ship = new Ship("Dover");

        
    
        expect(ship.passengers).toEqual(0);
    });
});

describe("onBoard", () => {
it("increase the passengers by 1", () => {
    const ship = new Ship("Dover");

    ship.onBoard();

    

    expect(ship.passengers).toEqual(1);
    });
});

 