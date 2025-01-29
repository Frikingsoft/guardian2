import express from 'express';
import { get, post, put, deleteLocal } from '../controllers/localController.js';

const localRouter = express.Router();

localRouter.get("/", get);
localRouter.get("/:id", get);
localRouter.post("/", post);
localRouter.put("/:idLocal", put);
localRouter.delete("/:idLocal", deleteLocal);

export default localRouter;