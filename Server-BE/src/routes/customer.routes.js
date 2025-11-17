import { Router } from "express";
import customerController from "../controllers/customer.controller.js";
import customerValidator from "../validators/customer.validator.js";

const customerRouter = Router()

customerRouter.get("/", customerController.getAllCustomers)
customerRouter.get(
    '/search', 
    customerValidator.validateSearchQuery(), 
    customerController.getCustomerByCode
)

export default customerRouter;