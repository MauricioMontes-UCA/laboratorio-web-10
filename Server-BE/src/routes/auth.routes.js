import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authValidator } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/signin", authValidator.validateLogin(), authController.loginUser);

// No borra nada realmente, o bueno, solo el token de autenticación
authRouter.delete("/logout", authController.logoutUser);

export default authRouter;