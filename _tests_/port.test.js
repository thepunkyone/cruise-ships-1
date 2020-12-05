const Port = require("../src/Port.js");

describe("Port", () => {
    let port;
    let ship = {}; // Ship is an instance of Object, so use an empty object to mock a ship instead of a function
    beforeEach(() => {
        port = new Port("Dover");
        // port = new Port("Calais"); // What is happening here is that you are reassigning the value of variable port - first to Dover, then to Calais
                                    // This does not create two ports, it just overrides the first port with the second port
                                    // To create 2 ports you need to initialise 2 variables - let dover and let calais
        
    });


        it("Returns the object", () => {
            expect(port).toBeInstanceOf(Object);
        });

        it("it sets the port name property", () => {
            // const port = {                      // This test was passing for the wrong reason as you are creating an object with name Dover
            //     name: "Dover"                   // It is not testing the Port class
            // };

            expect(port.name).toEqual("Dover");
        });

        it("can add a ship", () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });
    

    it("can remove a ship", () => {
        const titanic = {}       // Ship is an instance of object, so it should not be mocked with a function
        const jackSparrow = {}

        port.addShip(titanic);
        port.addShip(jackSparrow);
        port.removeShip(jackSparrow);

        expect(port.ships).toEqual([titanic]);
    });
});