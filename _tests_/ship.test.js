const Ship = require("../src/Ship.js");
const Port = require("../src/Port.js");
const Itinerary = require("../src/itinerary.js");

describe("Ship", () => {
    let ship;
    let dover;
    let calais;
    let itinerary;
    let port;

    beforeEach(() => {
        port = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
            dock: jest.fn()
        };

        dover = {
            ...port,
            name: "Dover",
            ships: []
        };

        calais = {
            ...port,
            name: "Calais",
            ships: []
        };
        itinerary = new Itinerary([dover, calais]);
        ship = new Ship(itinerary);
    });
    describe("with ports and an itinerary", () => {
        let ship;
        let dover;
        let calais;
        let itinerary;
        let port;

        beforeEach(() => {
            port = {
                removeShip: jest.fn(),
                addShip: jest.fn(),
                dock: jest.fn()
            };

            dover = {
                ...port,
                name: "Dover",
                ships: []
            };

            calais = {
                ...port,
                name: "Calais",
                ships: []
            };
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
        });

        it("can be instantiated", () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it("has a current port", () => {
            const itinerary = new Itinerary([port]);
            const ship = new Ship(itinerary);

            expect(ship.currentPort).toBe(port);
        });
    });

    it(" can set sail", () => {
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });

    it("can dock at a different port", () => {


        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);

        expect(port.addShip).toHaveBeenCalledWith(ship);

    });

    it("can't sail further than its itinerary", () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError("End of itinerary reached");
    });

    it("gets added to port on instantiation", () => {
        expect(port.addShip).toHaveBeenCalledWith(ship);
    });
});