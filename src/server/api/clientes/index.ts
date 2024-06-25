import raExpressMongoose from "express-mongoose-ra-json-server";
import { Schema, Document } from "mongoose";
import { createModel, dbConnection } from "../../db";

export interface ICliente extends Document {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  tipoDocumento: string;
  documento: string;
  fechaRegistro?: Date;
}

const ClienteSchema: Schema<ICliente> = new Schema<ICliente>({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: String, required: true },
  direccion: { type: String, required: true },
  tipoDocumento: { type: String, required: true },
  documento: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now, required: false },
});

export const ClienteModel = createModel("Cliente", ClienteSchema, undefined, {
  connection: dbConnection,
});

export default raExpressMongoose(ClienteModel);
