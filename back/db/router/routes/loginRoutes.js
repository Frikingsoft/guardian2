import express from 'express';
import { post} from '../controllers/localController.js';
import { login } from "../controllers/loginController.js"
const localRouter = express.Router();

localRouter.post("/login", login, post);


export default localRouter;