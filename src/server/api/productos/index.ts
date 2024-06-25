import raExpressMongoose from "express-mongoose-ra-json-server";
import { Schema } from "mongoose";
import { createModel, dbConnection } from "../../db";

export interface IProducto extends Document {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  proveedor: string;
  fechaRegistro: Date;
}

const ProductoSchema: Schema<IProducto> = new Schema<IProducto>({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoria: { type: String, required: true },
  proveedor: { type: String, required: true },
  fechaRegistro: { type: Date, default: Date.now },
});

export const ProductoModel = createModel(
  "Producto",
  ProductoSchema,
  undefined,
  {
    connection: dbConnection,
  }
);

export default raExpressMongoose(ProductoModel);
