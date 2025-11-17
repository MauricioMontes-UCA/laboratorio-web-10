import { Router } from "express";
import salesRouter from "./src/routes/sales.routes.js";
import customerRouter from "./src/routes/customer.routes.js";

const appRouter = Router()

appRouter.use('/sales', salesRouter);
appRouter.use('/customers', customerRouter);

export default appRouter;