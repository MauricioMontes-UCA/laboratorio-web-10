import { Router } from "express";
import salesRouter from "./src/routes/sales.routes.js";
import customerRouter from "./src/routes/customer.routes.js";
import userRouter from "./src/routes/user.routes.js";
import authRouter from "./src/routes/auth.routes.js";

const appRouter = Router()

appRouter.use('/sales', salesRouter);
appRouter.use('/customers', customerRouter);
appRouter.use('/users', userRouter)
appRouter.use('/auth', authRouter)

export default appRouter;