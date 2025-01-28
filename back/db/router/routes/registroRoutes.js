import express from 'express';
import { registroController } from "../controllers/registroController.js"
import { registro } from "./registro.js"
const registroRoutes = express.Router();

registroRoutes.post("/", registroController,registro);


export default registroRoutes;