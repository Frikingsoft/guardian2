import express from 'express';

const routes = express.Router();

routes.use("/employees", employeeRoutes.js)
routes.use("/incidents", incidentRoutes.js)
routes.use("/locals", localRoutes.js)
routes.use("/outgoings", outgoingRoutes.js)
routes.use("/schedules", scheduleRoutes.js)

export default routes;