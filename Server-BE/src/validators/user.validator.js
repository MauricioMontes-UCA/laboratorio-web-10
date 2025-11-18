import { body, param, query } from "express-validator";
import handleValidationErrors from "../middlewares/validator.middlewares.js";

class UserValidator {
    // Validador para el registro de usuarios (POST /api/users/)
    validateRegister() {
        return [
            body('name')
                .trim()
                .notEmpty().withMessage('El nombre de usuario es requerido')
                .isLength({ min: 3, max: 50 }).withMessage('El nombre de usuario debe tener entre 3 y 50 caracteres')
                .matches(/^[a-zA-Z0-9_]+$/).withMessage('El nombre de usuario solo puede contener letras, números y guiones bajos'),
            
            body('email')
                .trim()
                .notEmpty().withMessage('El correo electrónico es requerido')
                .isEmail().withMessage('El correo electrónico no tiene un formato válido')
                .normalizeEmail(),
            
            body('password')
                .notEmpty().withMessage('La contraseña es requerida')
                .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
                .matches(/[a-z]/).withMessage('La contraseña debe contener al menos una letra minúscula')
                .matches(/[A-Z]/).withMessage('La contraseña debe contener al menos una letra mayúscula')
                .matches(/[0-9]/).withMessage('La contraseña debe contener al menos un número')
                .matches(/[@$!%*?&#]/).withMessage('La contraseña debe contener al menos un carácter especial (@$!%*?&#)'),
            
            handleValidationErrors
        ];
    }

    // Validador para actualización de usuarios (PATCH /api/users/me)
    validateUpdate() {
        return [
            body('username')
                .optional()
                .trim()
                .notEmpty().withMessage('El nombre de usuario no puede estar vacío')
                .isLength({ min: 3, max: 50 }).withMessage('El nombre de usuario debe tener entre 3 y 50 caracteres')
                .matches(/^[a-zA-Z0-9_]+$/).withMessage('El nombre de usuario solo puede contener letras, números y guiones bajos'),
            
            body('email')
                .optional()
                .trim()
                .notEmpty().withMessage('El correo electrónico no puede estar vacío')
                .isEmail().withMessage('El correo electrónico no tiene un formato válido')
                .normalizeEmail(),
            
            body('password')
                .optional()
                .notEmpty().withMessage('La contraseña no puede estar vacía')
                .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
                .matches(/[a-z]/).withMessage('La contraseña debe contener al menos una letra minúscula')
                .matches(/[A-Z]/).withMessage('La contraseña debe contener al menos una letra mayúscula')
                .matches(/[0-9]/).withMessage('La contraseña debe contener al menos un número')
                .matches(/[@$!%*?&#]/).withMessage('La contraseña debe contener al menos un carácter especial (@$!%*?&#)'),
            
            body('first_name')
                .optional()
                .trim()
                .notEmpty().withMessage('El nombre no puede estar vacío')
                .isLength({ max: 50 }).withMessage('El nombre no puede exceder 50 caracteres'),
            
            body('last_name')
                .optional()
                .trim()
                .notEmpty().withMessage('El apellido no puede estar vacío')
                .isLength({ max: 50 }).withMessage('El apellido no puede exceder 50 caracteres'),
            
            // Validar que al menos un campo esté presente
            body().custom((value, { req }) => {
                const allowedFields = ['username', 'email', 'password', 'first_name', 'last_name'];
                const hasAtLeastOneField = allowedFields.some(field => req.body[field] !== undefined);
                
                if (!hasAtLeastOneField) {
                    throw new Error('Debe proporcionar al menos un campo para actualizar');
                }
                
                return true;
            }),
            
            handleValidationErrors
        ];
    }

    // Validador para búsqueda por ID (GET /api/users/:id)
    validateUserId() {
        return [
            param('id')
                .notEmpty().withMessage('El ID del usuario es requerido')
                .isInt({ min: 1 }).withMessage('El ID del usuario debe ser un número entero positivo')
                .toInt(),
            
            handleValidationErrors
        ];
    }

    // Validador para búsqueda por email (GET /api/users?email=)
    validateUserQuery() {
        return [
            query('email')
                .optional()
                .trim()
                .isEmail().withMessage('El correo electrónico no tiene un formato válido')
                .normalizeEmail(),
            
            handleValidationErrors
        ];
    }
}

// Exportar instancia singleton
export const userValidator = new UserValidator();