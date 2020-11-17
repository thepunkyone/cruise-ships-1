const Port = require("../src/Port.js");
const Itinerary = require("../src/Itinerary.js");

describe("Itinerary", () => {
  let port;
  let itinerary;

  beforeEach(() => {
    port = new Port("Dover");
    port = new Port("Calais");
  });

  it("can be instantiated", () => {
    expect(new Port("Calais")).toBeInstanceOf(Object);
  });

  it("can have  ports ", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");

    itinerary = new Itinerary([dover, calais]);

    expect(itinerary.ports).toEqual([dover, calais]);
  });
});
