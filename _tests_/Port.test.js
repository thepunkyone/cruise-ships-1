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
