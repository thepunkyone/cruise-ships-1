const Ship = require("../src/Ship.js");
const Port = require("../src/port.js")

describe("constructor", () => {
    let ship;
    let port;

    beforeEach(() => {
        port = new Port("Dover");
        ship = new Ship(port);
    })


    it("can be instantiated", () => {
        expect(new Ship("Dover")).toBeInstanceOf(Object);
    })

    it("has a current port", () => {
        

        expect(ship.currentPort).toBe(port);
    })

    it(" has initial passengers 0", () => {

        expect(ship.passengers).toEqual(0);
    })
});

describe("onBoard", () => {

    let ship;

    beforeEach(()=> {
        ship = new Ship("Dover");
    })
    it("increase the passengers by 1", () => {
    

    ship.onBoard();

        expect(ship.passengers).toEqual(1);
    })
});

    describe("setSail", () => {

        let port;
        let ship;

        beforeEach(() => {
            port = new Port("Dover");
            ship = new Ship(port);        
        })

        it("It can set sail", () => {
            const port = new Port("Dover");
            const ship = new Ship(port);

            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
        })
    });

    describe("dock", () => {

        let port;
        let ship;
        let calais;

        beforeEach(() => {
            port = new Port("Dover");
            ship = new Ship("dover");
            calais = new Ship("Calais");
        })

        it("can dock at a different port", () => {
            

           
            ship.dock(calais);

            expect(ship.currentPort).toBe(calais);
        })
    });


 