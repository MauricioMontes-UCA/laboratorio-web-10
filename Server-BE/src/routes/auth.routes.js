import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authValidator } from "../validators/auth.validator.js";
import authenticateToken from "../middlewares/auth.middlewares.js";

const authRouter = Router();


authRouter.post("/signin", authValidator.validateLogin(), authController.loginUser);

// No borra nada realmente, o bueno, solo el token de autenticación
authRouter.delete("/logout", authController.logoutUser);

// Método para verificar que está autenticado un usuario para las rutas protegidas
authRouter.get("/verify", authenticateToken, authController.verifyAuth)

export default authRouter;