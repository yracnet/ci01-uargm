import { handler } from "../../.api/handler";
import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", handler);

export const appTestServer = request(app);
export const Token = "Bearer 12345";
