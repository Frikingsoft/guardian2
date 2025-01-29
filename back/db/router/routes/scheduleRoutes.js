import express from 'express';
import { get, post, put, deleteSchedule } from '../controllers/scheduleController.js';

const scheduleRouter = express.Router();

scheduleRouter.get("/", get);
scheduleRouter.get("/:id", get);
scheduleRouter.post("/", post);
scheduleRouter.put("/:idSchedule", put);
scheduleRouter.delete("/:idSchedule", deleteSchedule);

export default scheduleRouter;