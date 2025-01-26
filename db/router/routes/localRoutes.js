import express from 'express';
import { get, post, put, deleteLocal } from '../controllers/localController.js';

const localRouter = express.Router();

localRouter.get("/", get);
localRouter.post("/:idLocal", post);
localRouter.put("/:idEmployee", put);
localRouter.delete("/:idEmployee", deleteLocal);

export default localRouter;