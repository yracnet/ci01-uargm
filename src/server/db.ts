// src/db.ts
import { loadEnv } from "dotenv-local";
import mongoose, { CompileModelOptions, Schema } from "mongoose";

const { MONGO_DB_URL } = loadEnv({
  envPrefix: ["API_", "MONGO_"],
  envInitial: <any>process.env,
});

mongoose.connect(MONGO_DB_URL, {
  autoCreate: true,
  monitorCommands: true,
});

export const dbConnection = mongoose.connection;

dbConnection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

export const createModel = <T>(
  name: string,
  schema: Schema,
  collectionName?: string,
  options: CompileModelOptions = {}
) => {
  const exist = mongoose.models[name];
  if (exist) {
    mongoose.deleteModel(name);
  }
  const model = mongoose.model<T>(name, schema, collectionName, {
    ...options,
    connection: dbConnection,
  });
  //dbConnection.collections;
  model.createCollection();
  return model;
};
