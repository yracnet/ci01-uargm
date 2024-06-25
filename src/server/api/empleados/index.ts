import raExpressMongoose from "express-mongoose-ra-json-server";
import { Schema, Document } from "mongoose";
import { createModel, dbConnection } from "../../db";

export interface IEmpleado extends Document {
  nombre: string;
  cargo: string;
  departamento: string;
  fechaContratacion: Date;
  salario: number;
  email: string;
  telefono: string;
}

const EmpleadoSchema: Schema<IEmpleado> = new Schema<IEmpleado>({
  nombre: { type: String, required: true },
  cargo: { type: String, required: true },
  departamento: { type: String, required: true },
  fechaContratacion: { type: Date, required: true },
  salario: { type: Number, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
});

export const EmpleadoModel = createModel(
  "Empleado",
  EmpleadoSchema,
  undefined,
  {
    connection: dbConnection,
  }
);

export default raExpressMongoose(EmpleadoModel);
