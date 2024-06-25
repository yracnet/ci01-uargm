import React from "react";
import { expect, describe, test } from "vitest";
import {
  EmpleadoCreate,
  EmpleadoEdit,
  EmpleadoList,
  EmpleadoShow,
} from "../../src/client/empleados";
import { render } from "@testing-library/react";
import { AdminContext, defaultI18nProvider, memoryStore } from "react-admin";
import { dataProvider, delayFor } from "./ui.base";

describe("Empleado Component", () => {
  const empleadoId = "667854cf25c5536f2010b0cd";

  test("EmpleadoList", () => {
    window.history.pushState({}, "Test page", `/#/empleados`);
    const { getByText, getByLabelText } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <EmpleadoList resource="empleados" />
      </AdminContext>
    );
  });

  test("EmpleadoCreate", () => {
    window.history.pushState({}, "Test page", `/#/empleados/create`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <EmpleadoCreate resource="empleados" />
      </AdminContext>
    );
  });

  test("EmpleadoEdit", async () => {
    window.history.pushState({}, "Test page", `/#/empleados/${empleadoId}`);
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <EmpleadoEdit
          id={empleadoId}
          resource="empleados"
          disableAuthentication={false}
        />
      </AdminContext>
    );
    // await delayFor(2000);

    // const allInputs = [
    //   ...baseElement.querySelectorAll(".EmpleadoEdit input"),
    // ] as HTMLInputElement[];
    // const emailInput = allInputs.find((it) => it.name === "email");
    // expect(emailInput?.value).toBe("yracnet@gmail.com");
  });

  test("EmpleadoShow", async () => {
    window.history.pushState(
      {},
      "Test page",
      `/#/empleados/${empleadoId}/show`
    );
    const { baseElement } = render(
      <AdminContext
        dataProvider={dataProvider}
        store={memoryStore()}
        i18nProvider={defaultI18nProvider}
      >
        <EmpleadoShow
          id={empleadoId}
          resource="empleados"
          disableAuthentication={false}
        />
      </AdminContext>
    );
  });
});
