import express from 'express';
import { get, post, put, deleteIncident } from '../controllers/incidentController.js';

const incidentRouter = express.Router();

incidentRouter.get("/", get);
incidentRouter.post("/:idLocal", post);
// incidentRouter.delete("/:idEmployee", deleteIncident);

export default incidentRouter;