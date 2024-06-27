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
  DateInput,
  Edit,
  Show,
  SimpleShowLayout,
  DateField,
  NumberField,
  SelectInput,
  SelectField,
  Filter,
} from "react-admin";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";


const departamentos = [
  { id: "IT", name: "IT" },
  { id: "Recursos Humanos", name: "Recursos Humanos" },
  { id: "Ventas", name: "Ventas" },
  { id: "Marketing", name: "Marketing" },
];

const cargos = [
  { id: "Manager", name: "Manager" },
  { id: "Desarrollador", name: "Desarrollador" },
  { id: "Analista", name: "Analista" },
  { id: "Diseñador", name: "Diseñador" },
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
          LISTA DE EMPLEADOS
        </Typography>
        {/* Aquí puedes agregar más elementos de AppBar según tu diseño */}
      </Toolbar>
    </AppBar>
  );
};


const EmpleadoFilter: React.FC = (props) => (
  <Filter {...props}>
    <TextInput label="Nombre" source="nombre" alwaysOn />
  </Filter>
);

export const EmpleadoList: React.FC<any> = (props) => (
  <>
    <CustomAppBar /> {/* Incluye aquí tu AppBar personalizado */}
  <List {...props} filters={<EmpleadoFilter />} title="Lista de Empleados">
    <Datagrid>
      <TextField source="nombre" />
      <SelectField source="cargo" choices={cargos} />
      <SelectField source="departamento" choices={departamentos} />
      <DateField source="fechaContratacion" />
      <NumberField source="salario" />
      <TextField source="email" />
      <TextField source="telefono" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
  </>
);

export const EmpleadoEdit: React.FC<any> = (props) => (
  <>
    <CustomAppBar /> {/* Incluye aquí tu AppBar personalizado */}
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <SelectInput source="cargo" choices={cargos} />
      <SelectInput source="departamento" choices={departamentos} />
      <TextInput source="email" />
      <TextInput source="telefono" />
    </SimpleForm>
  </Edit>
  </>
);

export const EmpleadoCreate: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
      <SelectInput source="cargo" choices={cargos} />
      <SelectInput source="departamento" choices={departamentos} />
      <DateInput source="fechaContratacion" />
      <NumberInput source="salario" />
      <TextInput source="email" />
      <TextInput source="telefono" />
    </SimpleForm>
  </Create>
  </>
);

export const EmpleadoShow: React.FC<any> = (props) => (
  <>
    <CustomAppBar />
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="nombre" />
      <SelectField source="cargo" choices={cargos} />
      <SelectField source="departamento" choices={departamentos} />
      <DateField source="fechaContratacion" />
      <NumberField source="salario" />
      <TextField source="email" />
      <TextField source="telefono" />
    </SimpleShowLayout>
  </Show>
  </>
);
