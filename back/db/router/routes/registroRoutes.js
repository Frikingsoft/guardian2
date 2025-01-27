import express from 'express';
import { post} from '../controllers/localController.js';
import { registro } from "../controllers/registroController.js"
const localRouter = express.Router();

localRouter.post("/registro", registro , post);


export default localRouter;