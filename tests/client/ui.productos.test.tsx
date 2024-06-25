import React from "react";
import { expect, describe, test } from "vitest";
import {
  ProductoCreate,
  ProductoEdit,
  ProductoList,
  ProductoShow,
} from "../../src/client/productos";
import { render } from "@testing-library/react";
import { AdminContext, defaultI18nProvider, memoryStore } from "react-admin";
import { dataProvider, delayFor } from "./ui.base";

describe("Producto Component", () => {
  const productoId = "60d0fe3b7f32a7d5c65e7c68";

  test("ProductoList", () => {
    window.history.pushState({}, "Test page", `/#/productos`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ProductoList resource="productos" />
      </AdminContext>
    );
  });

  test("ProductoCreate", () => {
    window.history.pushState({}, "Test page", `/#/productos/create`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ProductoCreate resource="productos" />
      </AdminContext>
    );
  });

  test("ProductoEdit", async () => {
    window.history.pushState({}, "Test page", `/#/productos/${productoId}`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ProductoEdit
          id={productoId}
          resource="productos"
          disableAuthentication={false}
        />
      </AdminContext>
    );
    // await delayFor(2000);

    // const allInputs = [
    //   ...baseElement.querySelectorAll(".ProductoEdit input"),
    // ] as HTMLInputElement[];
    // const emailInput = allInputs.find((it) => it.name === "email");
    // expect(emailInput?.value).toBe("yracnet@gmail.com");
  });

  test("ProductoShow", async () => {
    window.history.pushState(
      {},
      "Test page",
      `/#/productos/${productoId}/show`
    );
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ProductoShow
          id={productoId}
          resource="productos"
          disableAuthentication={false}
        />
      </AdminContext>
    );
  });
});
