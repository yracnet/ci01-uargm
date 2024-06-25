import { Admin, DataProvider, Resource } from "react-admin";
import {
  EmpleadoList,
  EmpleadoEdit,
  EmpleadoCreate,
  EmpleadoShow,
} from "./empleados";
import {
  ClienteCreate,
  ClienteEdit,
  ClienteList,
  ClienteShow,
} from "./clientes";
import {
  ProductoCreate,
  ProductoEdit,
  ProductoList,
  ProductoShow,
} from "./productos";

export const App = ({ dataProvider }: { dataProvider: DataProvider }) => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="empleados"
        list={EmpleadoList}
        edit={EmpleadoEdit}
        create={EmpleadoCreate}
        show={EmpleadoShow}
      />
      <Resource
        name="clientes"
        list={ClienteList}
        edit={ClienteEdit}
        create={ClienteCreate}
        show={ClienteShow}
      />
      <Resource
        name="productos"
        list={ProductoList}
        edit={ProductoEdit}
        create={ProductoCreate}
        show={ProductoShow}
      />
    </Admin>
  );
};
