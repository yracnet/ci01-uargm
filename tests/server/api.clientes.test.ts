import { expect, describe, test } from "vitest";
import { faker } from "@faker-js/faker";
import { Token, appTestServer } from "./api.base";

describe("API Clientes", () => {
  const newCliente = {
    nombre: faker.person.firstName(),
    email: faker.internet.email(),
    telefono: faker.phone.number(),
    direccion: faker.location.streetAddress(),
    tipoDocumento: "DNI",
    documento: faker.string.alpha(8),
    fechaRegistro: faker.date.past().toISOString(),
  };

  test("Listar clientes", async () => {
    const response = await appTestServer
      .get("/api/clientes")
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);

    if (response.body.length > 0) {
      const firstCliente = response.body[0];
      expect(firstCliente).toHaveProperty("nombre");
      expect(firstCliente).toHaveProperty("email");
      expect(firstCliente).toHaveProperty("telefono");
      expect(firstCliente).toHaveProperty("direccion");
      expect(firstCliente).toHaveProperty("tipoDocumento");
      expect(firstCliente).toHaveProperty("documento");
      expect(firstCliente).toHaveProperty("fechaRegistro");
    }
  });

  test("Insertar cliente", async () => {
    const response = await appTestServer
      .post("/api/clientes")
      .send(newCliente)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body._doc).toMatchObject(newCliente);
  });

  test("Buscar cliente por email", async () => {
    const response = await appTestServer
      .get(`/api/clientes?email=${newCliente.email}`)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(1);

    const foundCliente = response.body.find(
      (cliente) => cliente.email === newCliente.email
    );
    expect(foundCliente).toBeDefined();
    expect(foundCliente).toMatchObject(newCliente);
  });
});
