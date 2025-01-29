import express from 'express';
import { get, post, put, deleteEmployee } from '../controllers/employeeController.js';

const employeeRouter = express.Router();

employeeRouter.get("/", get);
employeeRouter.get("/:id", get);
employeeRouter.post("/", post);
employeeRouter.put("/:idEmployee", put);
employeeRouter.delete("/:idEmployee", deleteEmployee);

export default employeeRouter;