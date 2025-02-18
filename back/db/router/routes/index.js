import express from 'express';
import employeeRoutes from "./employeeRoutes.js"
import incidentRoutes from "./incidentRoutes.js"
import localRoutes from "./localRoutes.js"
import outgoRoutes from "./outgoRoutes.js"
import scheduleRoutes from "./scheduleRoutes.js"
import  loginRoutes from "./loginRoutes.js"
import registroRoutes from "./registroRoutes.js"
const routes = express.Router();

routes.use("/employees", employeeRoutes)
routes.use("/login", loginRoutes)
routes.use("/registro",registroRoutes)
routes.use("/incidents", incidentRoutes)
routes.use("/locals", localRoutes)
routes.use("/outgoings", outgoRoutes)
routes.use("/schedules", scheduleRoutes)

export default routes;