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
  DateInput,
  Edit,
  Show,
  SimpleShowLayout,
  SelectField,
  SelectInput,
  Filter,
} from "react-admin";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const tipoDocumentos = [
  { id: "DNI", name: "DNI" },
  { id: "Pasaporte", name: "Pasaporte" },
  { id: "CarnetExtranjeria", name: "Carnet de Extranjería" },
  { id: "Otro", name: "Otro" },
];

// Estilos personalizados para el AppBar
const useStyles = makeStyles(() => ({
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
          LISTA DE CLIENTES
        </Typography>
        {/* Aquí puedes agregar más elementos de AppBar según tu diseño */}
      </Toolbar>
    </AppBar>
  );
};

const ClienteFilter: React.FC = (props) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="nombre" alwaysOn />
    <SelectInput
      label="Documento"
      source="tipoDocumento"
      choices={tipoDocumentos}
    />
  </Filter>
);

export const ClienteList: React.FC<any> = (props) => (
  <>
    <CustomAppBar /> {/* Incluye aquí tu AppBar personalizado */}
    <List {...props} filters={<ClienteFilter />} perPage={10}>
      <Datagrid>
        <TextField source="nombre" />
        <TextField source="email" />
        <TextField source="telefono" />
        <TextField source="direccion" />
        <SelectField source="tipoDocumento" choices={tipoDocumentos} />
        <TextField source="documento" />
        <TextField source="fechaRegistro" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  </>
);

export const ClienteCreate: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
    <Create {...props}>
      <SimpleForm>
        <TextInput source="nombre" />
        <TextInput source="email" />
        <TextInput source="telefono" />
        <TextInput source="direccion" />
        <SelectInput source="tipoDocumento" choices={tipoDocumentos} />
        <TextInput source="documento" />
        <DateInput source="fechaRegistro" />
      </SimpleForm>
    </Create>
  </>
);

export const ClienteEdit: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
    <div className="ClienteEdit">
      <Edit {...props}>
        <SimpleForm>
          <TextInput source="nombre" />
          <TextInput source="email" />
          <TextInput source="telefono" />
          <TextInput source="direccion" />
          <SelectInput source="tipoDocumento" choices={tipoDocumentos} />
          <TextInput source="documento" />
          <DateInput source="fechaRegistro" />
        </SimpleForm>
      </Edit>
    </div>
  </>
);

export const ClienteShow: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="nombre" />
        <TextField source="email" />
        <TextField source="telefono" />
        <TextField source="direccion" />
        <SelectField source="tipoDocumento" choices={tipoDocumentos} />
        <TextField source="documento" />
        <TextField source="fechaRegistro" />
      </SimpleShowLayout>
    </Show>
  </>
);
