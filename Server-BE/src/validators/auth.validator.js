import { body } from "express-validator";
import handleValidationErrors from "../middlewares/validator.middlewares.js";

class AuthValidator {
    // Validador para el login de usuarios (POST /api/auth/login)
    validateLogin() {
        return [
            body('email')
                .trim()
                .notEmpty().withMessage('El correo electrónico es requerido')
                .isEmail().withMessage('El correo electrónico no tiene un formato válido')
                .normalizeEmail(),
            
            body('password')
                .notEmpty().withMessage('La contraseña es requerida')
                .isString().withMessage('La contraseña debe ser una cadena de texto'),
            
            handleValidationErrors
        ];
    }
}

// Exportar instancia singleton
export const authValidator = new AuthValidator();