const generateUniqueId = require("../../src/utils/generateUniqueId");

describe("Generate unique id", () => {
  it("Deve gerar um ID unico", () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
