import { Router } from "express";
import customerController from "../controllers/customer.controller.js";
import customerValidator from "../validators/customer.validator.js";
import authenticateToken from "../middlewares/auth.middlewares.js";

const customerRouter = Router()

customerRouter.get("/", authenticateToken, customerController.getAllCustomers)
customerRouter.get(
    '/search', authenticateToken,
    customerValidator.validateSearchQuery(),
    customerController.getCustomerByCode
)

export default customerRouter;