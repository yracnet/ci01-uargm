import fakeDataProvider from "ra-data-fakerest";

export const dataProvider = fakeDataProvider({
  clientes: [
    {
      id: "66783c7c0601d56e93917367",
      nombre: "Willyams Yujra",
      email: "yracnet@gmail.com",
      telefono: "70189721",
      direccion: "Calle 668",
      tipoDocumento: "DNI",
      documento: "999999",
      fechaRegistro: "2024-06-23T00:00:00.000Z",
    },
  ],
  empleados: [
    {
      id: "667854cf25c5536f2010b0cd",
      nombre: "Lorena",
      cargo: "Analista",
      departamento: "IT",
      fechaContratacion: "2024-05-31T06:41:38.237Z",
      salario: 48510,
      email: "Fanny_Gulgowski11@gmail.com",
      telefono: "449-367-1360 x48949",
    },
  ],
  productos: [
    {
      id: "60d0fe3b7f32a7d5c65e7c68",
      nombre: "Laptop Lenovo ThinkPad X1 Carbon",
      descripcion:
        "Laptop ultradelgada y ultraligera con pantalla Full HD y procesador Intel Core i7",
      precio: 1499.99,
      stock: 50,
      categoria: "Electrónica",
      proveedor: "Lenovo",
      fecha_registro: "2022-06-22T00:00:00.000Z",
    },
  ],
});

export const delayFor = async (time = 1000) => {
  await new Promise((resolve) => setTimeout(resolve, time));
};
