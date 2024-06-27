import { describe, expect, test } from "vitest";
import { IProducto } from "../../src/server/api/productos";
import { categorias, proveedores } from "../../src/client/productos";
import { faker } from "@faker-js/faker";
import { Token, appTestServer } from "./api.base";

describe("API Productos", () => {
  const newProducto: IProducto = {
    nombre: faker.person.firstName(),
    descripcion: faker.string.alpha(100),
    precio: faker.helpers.rangeToNumber({ min: 10, max: 500 }),
    stock: faker.helpers.rangeToNumber({ min: 0, max: 1000 }),
    categoria: faker.helpers.arrayElement(categorias).name,
    proveedor: faker.helpers.arrayElement(proveedores).name,
    //@ts-ignore
    fechaRegistro: faker.date.past().toISOString(),
  };

  test("Listar Productos", async () => {
    const response = await appTestServer
      .get("/api/productos/?_start=0")
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("Insertar Producto", async () => {
    const response = await appTestServer
      .post("/api/productos")
      .send(newProducto)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body._doc).toMatchObject(newProducto);
  });

  test("Eliminar Producto", async () => {
    const response = await appTestServer
      .delete(`/api/productos/?nombre=${newProducto.nombre}`)
      .send(newProducto)
      .set("Authorization", Token)
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.body._doc).toMatchObject(newProducto);
  });

  test("Buscar Producto por nombre", async () => {
    const response = await appTestServer
      .get(`/api/productos/?nombre=${newProducto.nombre}`)
      .send(newProducto)
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
