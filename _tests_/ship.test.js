const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/itinerary.js");

describe("constructor", () => {
    let ship;
    let port;
    let itinerary;

    beforeEach(() => {
        port = new Port("Dover");
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
    });

    it("can be instantiated", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("has a current port", () => {
        expect(ship.currentPort).toBe(port);
    });

    it(" has initial passengers 0", () => {
        expect(ship.passengers).toEqual(0);
    });
});

describe("onBoard", () => {
    let ship;

    beforeEach(() => {
        port = new Port("Dover");
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
    });
    it("increase the passengers by 1", () => {
        ship.onBoard();

        expect(ship.passengers).toEqual(1);
    });
});

describe("setSail", () => {
    let port;
    let itinerary;
    let ship;

    beforeEach(() => {
        port = new Port("Dover");
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
    });

    it("It can set sail", () => {
        const dover = new Port("Dover");
        const calais = new Port("Calais");
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
    });
});

describe("dock", () => {
    let dover;
    let calais;
    let itinerary;
    let ship;

    beforeEach(() => {
        dover = new Port("Dover");
        calais = new Port("Calais");
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });

    it("can't sail further than its itinerary", () => {
        const dover = new Port("Dover");
        const calais = new Port("Calais");
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });


});