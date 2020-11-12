const Ship = require("../src/Ship.js");

describe("constructor", () => {
    it("can be instantiated", () => {
        expect( new Ship()).toBeInstanceOf(Object);
    });

    it("has a starting port", () => {
        const ship = new Ship("Dover");

        expect(ship.startingPort).toBe("Dover");
    })
});

 