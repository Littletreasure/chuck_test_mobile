import * as api from "./api";

describe("getJoke", () => {
  it("returns data containing the word 'Chuck'", () => {
    const actual = api.getJoke();
    return actual.then(data => {
      expect(data).toContain("Chuck");
    });
  });
});
describe("getJoke('Ruth', 'Sargent)", () => {
  it("returns data containing the word 'Ruth'", () => {
    const actual = api.getJoke("Ruth", "Sargent");
    return actual.then(data => {
      expect(data).toContain("Ruth");
    });
  });
});
describe("getJokeList", () => {
  it("returns an array of 10 jokes", () => {
    const actual = api.getJokeList();
    return actual.then(data => {
      expect(data.length).toBe(10);
    });
  });
});
