const Port = require("../src/port.js");

describe("Port", () => {
    let port;

    beforeEach(() => {
        port = new Port("Dover");
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
});

describe("addShip", () => {
    let port;
    let ship;

    beforeEach(() => {
        port = new Port("Dover");
        ship = {};
    });
    it("can add a ship", () => {
        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});

describe("removeShip", () => {
    let port;
    let titanic;
    let jackSparrow;




    beforeEach(() => {
        port = new Port("Dover");
        titanic = {};
        jackSparrow = {};
    });
    it("can remove a ship", () => {

        port.addShip(titanic);
        port.addShip(jackSparrow);
        port.removeShip(jackSparrow);



        expect(port.ships).toEqual([titanic]);


    })
});