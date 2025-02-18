import express from 'express';
import { get, post, put } from '../controllers/outgoController.js';

const outgoRouter = express.Router();

outgoRouter.get("/", get);
outgoRouter.get("/:id", get);
outgoRouter.post("/", post);
outgoRouter.put("/:idEmployee", put);
// outgoRouter.delete("/:idEmployee", deleteOutgo);

export default outgoRouter;