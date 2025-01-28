import express from 'express';

import { registro } from "../controllers/registroController.js"
const registroRoutes = express.Router();

registroRoutes.post("/", registro);


export default registroRoutes;