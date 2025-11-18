import { Router } from "express";
import salesController from "../controllers/sales.controller.js";
import salesValidator from "../validators/sales.validator.js";
import authenticateToken from "../middlewares/auth.middlewares.js";

const salesRouter = Router();

salesRouter.get("/", authenticateToken, salesController.getAllSales);
salesRouter.post("/", authenticateToken, salesValidator.validatePostBody(), salesController.addNewSale);
salesRouter.get("/report", authenticateToken, salesController.getAllReports);

export default salesRouter;