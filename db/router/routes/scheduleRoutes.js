import express from 'express';
import { get, post, put, deleteSchedule } from '../controllers/scheduleController.js';

const scheduleRouter = express.Router();

scheduleRouter.get("/", get);
scheduleRouter.post("/:idLocal", post);
scheduleRouter.put("/:idEmployee", put);
scheduleRouter.delete("/:idEmployee", deleteSchedule);

export default scheduleRouter;