const Ship = require("../src/ship");

describe("constructor", () => {
    it("return the ship object", () => {
        expect(new Ship("Titanic")).toBeInstanceOf(Object);
    });
})