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
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";


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
// Estilos personalizados para el AppBar
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ff0000", // Color de fondo rojo
  },
  title: {
    flexGrow: 1,
  },
}));

const CustomAppBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          LISTA DE PRODUCTOS
        </Typography>
        {/* Aquí puedes agregar más elementos de AppBar según tu diseño */}
      </Toolbar>
    </AppBar>
  );
};


export const ProductoList: React.FC<any> = (props) => (
  <>
    <CustomAppBar /> {/* Incluye aquí tu AppBar personalizado */}
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
  </>
);
export const ProductoCreate: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
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
  </>
);

export const ProductoEdit: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
    <div className="ProductoEdit">
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
    </div>
  </>
);
export const ProductoShow: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
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
  </>
);
