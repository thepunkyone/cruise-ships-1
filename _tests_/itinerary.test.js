const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
    let dover;
    let calais;

    beforeEach(() => {
        // The port variable at the top is not used in tests
        dover = new Port("Dover");
        calais = new Port("Calais");
        // The mock is unnecessary here - it is not a Port where itinerary gets instantiated with Ports
    });

    it("can be instantiated", () => {
        // expect(new Port("Calais")).toBeInstanceOf(Object); // This is a port being instantiated but it should be a test for the Itinerary
        expect(new Itinerary([dover, calais])).toBeInstanceOf(Object)
    });

    it("can have  ports ", () => {
        const itinerary = new Itinerary([dover, calais]); // Not necessary to reassign to let here, as you are creating a new Itinerary within this test
                                                        // Use the let if you need to create the Itinerary inside the beforeEach

        expect(itinerary.ports).toEqual([dover, calais]); // Removed mock as it is a function, not a Port class
    });
});