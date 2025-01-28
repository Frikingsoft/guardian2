import express from 'express';
import { post} from '../controllers/localController.js';
import { registro } from "../controllers/registroController.js"
const registroRoutes = express.Router();

registroRoutes.post("/registro", registro,post);


export default registroRoutes;