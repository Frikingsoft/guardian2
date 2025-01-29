import express from 'express';
import { loginController } from "../controllers/loginController.js"
import { login } from "./login.js"
const localRouter = express.Router();

localRouter.post("/", loginController, login);


export default localRouter;