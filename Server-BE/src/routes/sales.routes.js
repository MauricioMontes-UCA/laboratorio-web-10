import { Router } from "express";
import salesController from "../controllers/sales.controller.js";
import salesValidator from "../validators/sales.validator.js";

const salesRouter = Router();

salesRouter.get("/", salesController.getAllSales);
salesRouter.post("/", salesValidator.validatePostBody(), salesController.addNewSale);
salesRouter.get("/report", salesController.getAllReports);

export default salesRouter;