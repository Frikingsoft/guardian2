import express from 'express';
import { get, post, put } from '../controllers/outgoController.js';

const outgoRouter = express.Router();

outgoRouter.get("/", get);
outgoRouter.post("/:idEmployee", post);
outgoRouter.put("/:idEmployee", put);
// outgoRouter.delete("/:idEmployee", deleteOutgo);

export default outgoRouter;