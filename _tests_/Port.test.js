const Port = require("../src/port.js");

describe("Port", () => {
    let port;
    let ship;
    let titanic;
    let jackSparrow;
    let mockShip;

    beforeEach(() => {
        port = new Port("Dover");
        ship = jest.fn();
        titanic = {};
        jackSparrow = {};
        mockShip = jest.fn();
    });

    describe("ports with ships", () => {
        let port;
        let ship;
        let titanic;
        let jackSparrow;


        beforeAll(() => {
            port = new Port("Dover");
            ship = jest.fn();
            titanic = {};
            jackSparrow = {};

        });

        it("can be instantiated", () => {
            expect(port).toBeInstanceOf(Object);
        });

        it("it sets the port name property", () => {
            const port = {
                name: "Dover"
            };
            expect(port.name).toEqual("Dover");
        });

        it("can add a ship", () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });
    });

    it("can remove a ship", () => {
        port.addShip(titanic);
        port.addShip(jackSparrow);
        port.removeShip(mockShip);

        expect(port.ships).toEqual([titanic]);
    });
});