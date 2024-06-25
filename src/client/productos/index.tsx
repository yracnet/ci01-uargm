import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Edit,
  Show,
  SimpleShowLayout,
  NumberField,
  SelectInput,
  SelectField,
} from "react-admin";

export const categorias = [
  { id: "electronica", name: "Electrónica" },
  { id: "ropa", name: "Ropa" },
  { id: "juguetes", name: "Juguetes" },
];

export const proveedores = [
  { id: "lenovo", name: "Lenovo" },
  { id: "apple", name: "Apple" },
  { id: "samsung", name: "Samsung" },
];

export const ProductoList: React.FC<any> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <NumberField source="precio" />
      <NumberField source="stock" />
      <SelectField source="categoria" choices={categorias} />
      <SelectField source="proveedor" choices={proveedores} />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const ProductoCreate: React.FC<any> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <NumberInput source="precio" />
      <NumberInput source="stock" />
      <SelectInput source="categoria" choices={categorias} />
      <SelectInput source="proveedor" choices={proveedores} />
    </SimpleForm>
  </Create>
);

export const ProductoEdit: React.FC<any> = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <NumberInput source="precio" />
      <NumberInput source="stock" />
      <SelectInput source="categoria" choices={categorias} />
      <SelectInput source="proveedor" choices={proveedores} />
    </SimpleForm>
  </Edit>
);
export const ProductoShow: React.FC<any> = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <NumberField source="precio" />
      <NumberField source="stock" />
      <SelectField source="categoria" choices={categorias} />
      <SelectField source="proveedor" choices={proveedores} />
    </SimpleShowLayout>
  </Show>
);
