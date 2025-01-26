import express from 'express';
import { get, post, put, deleteOutgo } from '../controllers/outgoController.js';

const outgoRouter = express.Router();

outgoRouter.get("/", get);
outgoRouter.post("/:idLocal", post);
outgoRouter.put("/:idEmployee", put);
// outgoRouter.delete("/:idEmployee", deleteOutgo);

export default outgoRouter;