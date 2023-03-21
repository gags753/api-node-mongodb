import express from "express";
import cors from "cors"
import { router } from "./routes";
import mongoose from "mongoose";
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

export { app }