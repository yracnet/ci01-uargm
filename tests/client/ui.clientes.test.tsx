import React from "react";
import { expect, describe, test } from "vitest";
import {
  ClienteCreate,
  ClienteEdit,
  ClienteList,
  ClienteShow,
} from "../../src/client/clientes";
import { render } from "@testing-library/react";
import { AdminContext, defaultI18nProvider, memoryStore } from "react-admin";
import { dataProvider, delayFor } from "./ui.base";

describe("Cliente Component", () => {
  const clienteId = "66783c7c0601d56e93917367";

  test("ClienteList", () => {
    window.history.pushState({}, "Test page", `/#/clientes`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ClienteList resource="clientes" />
      </AdminContext>
    );
  });

  test("ClienteCreate", () => {
    window.history.pushState({}, "Test page", `/#/clientes/create`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ClienteCreate resource="clientes" />
      </AdminContext>
    );
  });

  test("ClienteEdit", async () => {
    window.history.pushState({}, "Test page", `/#/clientes/${clienteId}`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ClienteEdit
          id={clienteId}
          resource="clientes"
          disableAuthentication={false}
        />
      </AdminContext>
    );
    // await delayFor(2000);

    // const allInputs = [
    //   ...baseElement.querySelectorAll(".ClienteEdit input"),
    // ] as HTMLInputElement[];
    // const emailInput = allInputs.find((it) => it.name === "email");
    // expect(emailInput?.value).toBe("yracnet@gmail.com");
  });

  test("ClienteShow", async () => {
    window.history.pushState({}, "Test page", `/#/clientes/${clienteId}/show`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <ClienteShow
          id={clienteId}
          resource="clientes"
          disableAuthentication={false}
        />
      </AdminContext>
    );
  });
});
