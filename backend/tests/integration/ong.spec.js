const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("Deve criar uma ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        nome: "Vira Lata FUtebol Clube 2",
        email: "viralata2@teste.com",
        whatsapp: "19999990000",
        cidade: "São Pedro",
        estado: "SP",
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
