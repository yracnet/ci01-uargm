import { describe, expect, test } from "vitest";
import { IEmpleado } from "../../src/server/api/empleados";
import { faker } from "@faker-js/faker";
import { Token, appTestServer } from "./api.base";

describe("API Empleados", () => {
  const newEmpleado: IEmpleado = {
    nombre: faker.person.firstName(),
    cargo: "Analista",
    departamento: "IT",
    salario: faker.helpers.rangeToNumber({ min: 30000, max: 80000 }),
    email: faker.internet.email(),
    telefono: faker.phone.number(),
    //@ts-ignore
    fechaContratacion: faker.date.past().toISOString(),
  };

  test("Listar Empleados", async () => {
    const response = await appTestServer
      .get("/api/empleados/?_start=0")
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("Insertar Empleado", async () => {
    const response = await appTestServer
      .post("/api/empleados")
      .send(newEmpleado)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body._doc).toMatchObject(newEmpleado);
  });

  test("Eliminar Empleado", async () => {
    const response = await appTestServer
      .delete(`/api/empleados?nombre=${newEmpleado.nombre}`)
      .send(newEmpleado)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body._doc).toMatchObject(newEmpleado);
  });

  test("Buscar Empleado por email", async () => {
    const response = await appTestServer
      .get(`/api/empleados/?email=${newEmpleado.email}`)
      .send(newEmpleado)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(1);

    // const foundCliente = response.body.find(
    //   (cliente) => cliente.email === newCliente.email
    // );
    // expect(foundCliente).toBeDefined();
    // expect(foundCliente).toMatchObject(newCliente);
  });
});
