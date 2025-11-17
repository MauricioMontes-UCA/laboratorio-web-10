import { body } from "express-validator";
import handleValidationErrors from "../middlewares/validator.middlewares.js";

class SalesValidator {
    validatePostBody() {
        return [
            body('customerID')
                .exists().withMessage('Se requiere la propiedad customerID')
                .bail()
                .isInt({ min: 1 }).withMessage('La propiedad customerID debe ser un entero positivo')
                .bail()
                .toInt(),

            body('amount')
                .exists().withMessage('Se requiere la propiedad amount')
                .bail()
                .isFloat({ min: 0 }).withMessage('La propiedad amount debe ser un número positivo')
                .bail()
                .toFloat(),
            
            handleValidationErrors
        ]
    }
}

const salesValidator = new SalesValidator();

export default salesValidator;