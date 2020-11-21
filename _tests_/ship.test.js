const Ship = require("../src/Ship.js");
const Port = require("../src/port.js");
const Itinerary = require("../src/itinerary.js");

describe("Ship", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
    let port;

    beforeEach(() => {
        dover = new Port("Dover");
        calais = new Port("Calais");
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
        port = new Port("Dover");
    });
    describe("with ports and an itinerary", () => {
        let ship;
        let dover;
        let calais;
        let itinerary;
        let port;

        beforeEach(() => {
            dover = new Port("Dover");
            calais = new Port("Calais");
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
            port = new Port("Dover");
        });

        it("can be instantiated", () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it("has a current port", () => {

            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);

            expect(ship.currentPort).toBe(port);
        });

        it(" has initial passengers 0", () => {
            const port = new Port("Dover");
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);

            expect(ship.passengers).toEqual(0);
        });
    });

    it("can board passengers", () => {
        const port = new Port("Dover");
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        ship.onBoard();

        expect(ship.passengers).toEqual(1);
    });

    it("It can set sail", () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship);
    });

    it("can dock at a different port", () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });

    it("can't sail further than its itinerary", () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });
});